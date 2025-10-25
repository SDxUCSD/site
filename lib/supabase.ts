import { createClient } from '@supabase/supabase-js';
import type { Event, Project } from '@/constants';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

console.log('Supabase URL:', supabaseUrl ? 'Set' : 'Missing');
console.log('Supabase Key:', supabaseKey ? 'Set' : 'Missing');

export const supabase = createClient(supabaseUrl, supabaseKey);



export async function getEvents(): Promise<Event[]> {
  const { data, error } = await supabase
    .from('events')
    .select('*')
    .order('event_date', { ascending: false });
  
  console.log('Supabase response:', { data, error, count: data?.length });
  
  if (error) {
    console.error('Error fetching events:', error);
    return [];
  }

  return data || [];
}

export async function getProjects(): Promise<Project[]> {
  const { data, error } = await supabase
    .from('projects')
    .select('*');
  
  console.log('Supabase projects response:', { data, error, count: data?.length });
  
  if (error) {
    console.error('Error fetching projects:', error);
    return [];
  }

  return data || [];
}
