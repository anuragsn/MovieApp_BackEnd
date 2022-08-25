--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5
-- Dumped by pg_dump version 14.5

-- Started on 2022-08-25 19:19:10

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE "Movies";
--
-- TOC entry 3327 (class 1262 OID 27200)
-- Name: Movies; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE "Movies" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'English_India.1252';


ALTER DATABASE "Movies" OWNER TO postgres;

\connect "Movies"

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 213 (class 1259 OID 27396)
-- Name: Movies; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Movies" (
    id integer NOT NULL,
    name text,
    image_url text,
    "time" text,
    type text,
    description text
);


ALTER TABLE public."Movies" OWNER TO postgres;

--
-- TOC entry 212 (class 1259 OID 27395)
-- Name: Movies_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Movies_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Movies_id_seq" OWNER TO postgres;

--
-- TOC entry 3328 (class 0 OID 0)
-- Dependencies: 212
-- Name: Movies_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Movies_id_seq" OWNED BY public."Movies".id;


--
-- TOC entry 209 (class 1259 OID 27375)
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO postgres;

--
-- TOC entry 211 (class 1259 OID 27387)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    "userId" integer NOT NULL,
    username text,
    password text
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 210 (class 1259 OID 27386)
-- Name: users_userId_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."users_userId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."users_userId_seq" OWNER TO postgres;

--
-- TOC entry 3329 (class 0 OID 0)
-- Dependencies: 210
-- Name: users_userId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."users_userId_seq" OWNED BY public.users."userId";


--
-- TOC entry 3176 (class 2604 OID 27399)
-- Name: Movies id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Movies" ALTER COLUMN id SET DEFAULT nextval('public."Movies_id_seq"'::regclass);


--
-- TOC entry 3175 (class 2604 OID 27390)
-- Name: users userId; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN "userId" SET DEFAULT nextval('public."users_userId_seq"'::regclass);


--
-- TOC entry 3182 (class 2606 OID 27403)
-- Name: Movies Movies_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Movies"
    ADD CONSTRAINT "Movies_pkey" PRIMARY KEY (id);


--
-- TOC entry 3178 (class 2606 OID 27383)
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- TOC entry 3180 (class 2606 OID 27394)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY ("userId");


-- Completed on 2022-08-25 19:19:11

--
-- PostgreSQL database dump complete
--

