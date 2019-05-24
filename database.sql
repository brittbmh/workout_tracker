CREATE TABLE categories (
	id SERIAL PRIMARY KEY,
	category VARCHAR(40)
);

CREATE TABLE motivations (
	id SERIAL PRIMARY KEY,
	phrase VARCHAR(300),
	category_id INT NOT NULL REFERENCES categories
);

INSERT INTO categories ("category") VALUES ('positive'), ('encouraging');

INSERT INTO motivations ("phrase", "category_id") VALUES ('Way to go!', 1), ('I’m so proud of you. I just wanted to tell you in case no one has.', 1), ('It doesn’t matter how slowly you go as long as you do not stop.', 2), ('A little progress everyday adds up to big results.', 1), ('It always seems impossible until it is done. -Nelson Mandela', 2), ('You are capable of amazing things.', 2), ('Believe in yourself and you’ll be unstoppable.', 2), ('You only fail when you stop trying.', 2), ('if not now, then when?' , 2), ('You are amazing!', 1), ('Ya did good , kid.', 1);