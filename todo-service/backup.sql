INSERT INTO public.users(id, "name", email,age,"createAt",deleted)
VALUES('4aefc9ad-7025-4b6b-8f34-59e797a2fb7a','jordan', 'alexander@gmail.com', 12, now(), false);

INSERT INTO public.profile(id, "imageUrl","createAt",user_id)
VALUES
(1,'image.png', now(),'4aefc9ad-7025-4b6b-8f34-59e797a2fb7a');
