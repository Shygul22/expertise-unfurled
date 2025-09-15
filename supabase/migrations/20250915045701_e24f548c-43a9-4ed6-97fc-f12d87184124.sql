-- Fix security issues from previous migration

-- Add RLS policies for admin_sessions table
CREATE POLICY "Admin sessions - admin access only" 
ON public.admin_sessions 
FOR ALL 
USING (auth.email() = 'admin@zenjourney.in');

-- Add RLS policies for admin_reports table  
CREATE POLICY "Admin reports - admin access only" 
ON public.admin_reports 
FOR ALL 
USING (auth.email() = 'admin@zenjourney.in');

-- Fix function search path
DROP FUNCTION IF EXISTS public.update_updated_at_column();

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER 
LANGUAGE plpgsql 
SECURITY DEFINER 
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;