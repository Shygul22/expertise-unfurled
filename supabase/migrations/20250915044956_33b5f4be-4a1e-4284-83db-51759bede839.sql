-- Create a table for contact messages
CREATE TABLE public.contact_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  project_type TEXT,
  budget TEXT,
  project_details TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Create policy to allow admin read access (for now, allow all reads - you can restrict later)
CREATE POLICY "Allow read access to contact messages" 
ON public.contact_messages 
FOR SELECT 
USING (true);

-- Create policy to allow insert from anyone (for contact form submissions)
CREATE POLICY "Allow insert contact messages" 
ON public.contact_messages 
FOR INSERT 
WITH CHECK (true);