import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://damkfsklhmdebogeorsd.supabase.co'

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRhbWtmc2tsaG1kZWJvZ2VvcnNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg5NzkxOTcsImV4cCI6MjA5NDU1NTE5N30.8mTYkckMhKhBIT0NGjJ_WFpKf1i_yGJ0pCtrP-rRRig'

export const supabase = createClient(supabaseUrl, supabaseKey)