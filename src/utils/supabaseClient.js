import {createClient} from '@supabase/supabase-js';

const supabaseUrl = 'https://rpggnolocagqsbdwgkps.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJwZ2dub2xvY2FncXNiZHdna3BzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTc2ODY4ODIsImV4cCI6MTk3MzI2Mjg4Mn0.5GodXSo19vD8yR0Q39KJ3dm9hy4meBGwyhxmzsr5CAM';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);