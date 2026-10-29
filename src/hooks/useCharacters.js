import { useCallback, useEffect, useState } from 'react';

const API_URL = 'https://rickandmortyapi.com/api/character';

// Convierte la respuesta cruda de la API en los datos que necesita la tarjeta.
const mapCharacter = (c) => ({
  id: c.id,
  title: c.name,
  image: c.image,
  description: `${c.status} • ${c.species} • ${c.gender} — Origen: ${c.origin?.name ?? 'Desconocido'}`
});

export function useCharacters() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchPage = useCallback(async (pageNumber) => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`${API_URL}?page=${pageNumber}`);
      if (!response.ok) throw new Error(`Error HTTP ${response.status}`);
      const json = await response.json();
      setCharacters(json.results.map(mapCharacter));
      setTotalPages(json.info.pages);
      setPage(pageNumber);
    } catch (err) {
      setError(err.message || 'No se pudo consultar la API.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPage(1);
  }, [fetchPage]);

  const nextPage = () => page < totalPages && fetchPage(page + 1);
  const prevPage = () => page > 1 && fetchPage(page - 1);
  const refresh = () => fetchPage(page);

  return { characters, page, totalPages, loading, error, nextPage, prevPage, refresh, endpoint: API_URL };
}
