import { createClient } from '@supabase/supabase-js';
import { API_KEY } from './consts.js';

const api = 'https://wxxcutyfwymtvztcobvq.supabase.co';

const columns = {
  investments: '*, categories(name)',
  categories: '*',
};

const supabase = createClient(api, API_KEY);

async function create(resource, data) {
  const { data: newData, error } = await supabase
    .from(resource)
    .insert(data)
    .select(columns[resource]);

  if (error) {
    throw error;
  }

  return newData?.[0];
}

async function readAll(resource) {
  const { data, error } = await supabase
    .from(resource)
    .select(columns[resource]);

  if (error) {
    throw error;
  }

  return data;
}

async function update(resource, id, data) {
  const { newData, error } = await supabase
    .from(resource)
    .update(data)
    .eq('id', id)
    .select(columns[resource]);

  if (error) {
    throw error;
  }

  return newData;
}

async function remove(resource, id) {
  const { error } = await supabase.from(resource).delete().eq('id', id);

  if (error) {
    throw error;
  }
}

export default { create, readAll, update, remove };
