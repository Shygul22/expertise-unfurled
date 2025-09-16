-- Add mobile number and whatsapp number fields to contact_messages table
ALTER TABLE public.contact_messages 
ADD COLUMN mobile_number text,
ADD COLUMN whatsapp_number text;