import { useCallback, useEffect, useState } from 'react';

const API_URL = 'https://api.tvmaze.com/shows';

// Convierte la respuesta cruda de la API en los datos que necesita la tarjeta.
const mapCharacter = (c) => ({
  id: c.id,
  Nombre: c.name,
  Image: c.image,
  Genero: c.genres,
  FechaDeInicio: c.premiered,
  FechaDeFinalizacion: c.ended,
  ResumenDelShow: c.summary,
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
