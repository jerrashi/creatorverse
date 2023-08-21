import { createClient } from '@supabase/supabase-js';
const URL = 'https://pwmjbzienqrrwvptxktq.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB3bWpiemllbnFycnd2cHR4a3RxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI2NDA2MjYsImV4cCI6MjAwODIxNjYyNn0.vuaXVzdYs5MGhl6nUlvbQIekyzLxV5hQ3HccRJW6EMw';

export const supabase = createClient(URL, API_KEY);