-- Fix security issues - properly handle function dependencies

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

-- Fix function search path by dropping trigger first
DROP TRIGGER IF EXISTS update_admin_users_updated_at ON public.admin_users;
DROP FUNCTION IF EXISTS public.update_updated_at_column();

-- Recreate function with proper search path
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

-- Recreate the trigger
CREATE TRIGGER update_admin_users_updated_at
  BEFORE UPDATE ON public.admin_users
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();