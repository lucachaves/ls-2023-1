import { API_KEY } from './consts.js';

const api = 'https://wxxcutyfwymtvztcobvq.supabase.co/rest/v1';

const supabaseHeaders = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
};

async function create(resource, data) {
  await fetch(`${api}${resource}`, {
    method: 'post',
    body: JSON.stringify(data),
    headers: {
      ...supabaseHeaders,
      'Content-Type': 'application/json; charset=UTF-8',
      Prefer: 'return=minimal',
    },
  });
}

async function readAll(resource) {
  const res = await fetch(`${api}${resource}`, { headers: supabaseHeaders });

  return await res.json();
}

async function update(resource, data) {
  await fetch(`${api}${resource}`, {
    method: 'put',
    body: JSON.stringify(data),
    headers: {
      ...supabaseHeaders,
      'Content-Type': 'application/json; charset=UTF-8',
      Prefer: 'return=minimal',
    },
  });
}

async function remove(resource) {
  await fetch(`${api}${resource}`, {
    method: 'delete',
    headers: supabaseHeaders,
  });
}

export default { create, readAll, update, remove };
