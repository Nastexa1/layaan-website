import { useCart } from '../context/CartContext'

const adeegyo = [
  {
    title: 'Cabayado Cusub',
    text: 'Noocyo badan oo cabayado ah — midabyo kala duwan, dhar jilicsan, oo u qurux badan munaasabad kasta.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
      />
    ),
  },
  {
    title: 'Jewelry & Saacado',
    text: 'Xargo, hilqado, iyo saacado qurux badan oo cabayadaada dhammaystira — si xarrago leh.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
  {
    title: 'Gaarsiin Degdeg ah',
    text: 'Dalabkaaga waxaan ku gaarsiinaynaa 24–48 saacadood gudahood, magaalada oo dhan.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 17a2 2 0 11-4 0 2 2 0 014 0zm10 0a2 2 0 11-4 0 2 2 0 014 0zM13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1"
      />
    ),
  },
]

const alaabta = [
  {
    id: 'cabayo-madow',
    name: 'Cabayo Madow Classic',
    tag: 'Cabayo',
    price: 65,
    text: 'Cabayo madow oo fudud, jilicsan, oo ku habboon maalin kasta iyo munaasabadaha.',
    image:
      'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'cabayo-embroidered',
    name: 'Cabayo Embroidered',
    tag: 'Cabayo',
    price: 85,
    text: 'Cabayo leh xargo qurux badan iyo naqshad gaar ah — u qurux badan xafladaha.',
    image:
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'xarago-dahab',
    name: 'Xarago Dahab ah',
    tag: 'Jewelry',
    price: 45,
    text: 'Xargo iyo hilqado dahab ah oo cabayadaada dhammaystira si xarrago leh.',
    image:
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'saacad-elegant',
    name: 'Saacad Elegant',
    tag: 'Saacad',
    price: 55,
    text: 'Saacad qurux badan oo bilicsan — ku habboon labiska iyo cabayada.',
    image:
      'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=900&q=80',
  },
]

const raalliyo = [
  {
    name: 'Hodan A.',
    city: 'Muqdisho',
    text: 'Cabayadii aan ka soo iibsaday Layaan aad bay u qurux badnayd. Dhar wanaagsan iyo cabir sax ah.',
  },
  {
    name: 'Sagal M.',
    city: 'Hargeysa',
    text: 'Jewelry-ga iyo saacadda ayaan aad u jeclahay. Waxay cabayadayda si xarrago leh u dhammaystireen.',
  },
  {
    name: 'Ayaan I.',
    city: 'Jigjiga',
    text: 'Gaarsiintu waa degdeg. Baakadhkuna wuu qurux badnaa. Waan ku celcelinayaa dalabka.',
  },
]

export default function Home() {
  const { addItem } = useCart()

  return (
    <div className="bg-white text-[#0A192F]">
      <section id="home" className="relative scroll-mt-20 overflow-hidden">
        <img
          src="/hero-abaya.png"
          alt="Cabayo Layaan — Softness and Elegance"
          className="animate-soft-scale absolute inset-0 h-full w-full object-cover object-[center_20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F] via-[#0A192F]/80 to-[#0A192F]/25" />

        <div className="relative mx-auto flex min-h-[88vh] max-w-7xl items-center px-6">
          <div className="max-w-2xl py-24">
            <p className="animate-fade-up text-xs font-semibold tracking-[0.25em] text-blue-200 uppercase">
              Cabayo · Jewelry · Saacado
            </p>
            <h1 className="animate-fade-up delay-1 mt-5 font-display text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
              Cabayado qurux badan oo xarrago leh.
            </h1>
            <p className="animate-fade-up delay-2 mt-6 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
              Layaan waxay kuu keentaa cabayado, jewelry, iyo saacado — si aad ugu labisto
              qurux, kalsooni, iyo hab-dhaqan xarrago leh.
            </p>

            <div className="animate-fade-up delay-3 mt-9 flex flex-wrap gap-4">
              <a
                href="#shop"
                className="rounded-lg bg-white px-7 py-3.5 text-sm font-semibold text-[#0A192F] transition hover:bg-blue-100"
              >
                Alaabta Eeg
              </a>
              <a
                href="#about"
                className="rounded-lg border border-white/50 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                Wax Badan Baro
              </a>
            </div>

            <div className="animate-fade-up delay-3 mt-14 flex flex-wrap gap-x-12 gap-y-6">
              {[
                { num: '2,000+', label: 'Macmiil ku qanacsan' },
                { num: '50+', label: 'Nooc cabayo ah' },
                { num: '24saac', label: 'Gaarsiin degdeg ah' },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-display text-2xl text-white md:text-3xl">{s.num}</p>
                  <p className="mt-1 text-xs tracking-wide text-white/60">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-20 bg-white px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="order-2 md:order-1">
            <p className="text-xs font-semibold tracking-[0.25em] text-[#4A7BAA] uppercase">
              Ku Saabsan Layaan
            </p>
            <h2 className="mt-4 font-display text-3xl leading-snug md:text-4xl">
              Waxaan iibinaa cabayado, jewelry iyo saacado.
            </h2>
            <p className="mt-6 leading-relaxed text-slate-600">
              Layaan waa dukaan haween ah oo diiradda saaraya cabayado qurux badan. Waxaan kaloo
              kuu haynaa jewelry iyo saacado si aad ugu dhammaystirto labiskaaga.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              Cabayadeenna waxaa laga soo dooranayaa dhar jilicsan, midabyo kala duwan, iyo
              naqshado casri ah — maalin kasta iyo xafladaha midna ku habboon.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                'Cabayado midab iyo cabir kala duwan',
                'Jewelry & saacado xarrago leh',
                'Tayo sare iyo qiimo macquul ah',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0A192F]">
                    <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="order-1 md:order-2">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/about-abaya.png"
                alt="Cabayo bunni ah oo qurux badan"
                className="h-[420px] w-full object-cover object-top transition duration-700 hover:scale-105 md:h-[520px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="service" className="scroll-mt-20 bg-slate-50 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.25em] text-[#4A7BAA] uppercase">
              Maxaan kuu iibinnaa
            </p>
            <h2 className="mt-4 font-display text-3xl leading-snug md:text-4xl">
              Wax kasta oo aad u baahan tahay — meel keliya.
            </h2>
            <p className="mt-5 leading-relaxed text-slate-600">
              Laga soo bilaabo cabayada ilaa jewelry-ga iyo saacadaha, waxaan kuu diyaarinaynaa
              labis dhammaystiran oo qurux badan.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {adeegyo.map((s) => (
              <div
                key={s.title}
                className="group rounded-2xl border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-[#0A192F]/20 hover:shadow-lg"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0A192F] text-white transition group-hover:bg-[#172A45]">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {s.icon}
                  </svg>
                </span>
                <h3 className="mt-6 font-display text-xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="shop" className="scroll-mt-20 bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <p className="text-xs font-semibold tracking-[0.25em] text-[#4A7BAA] uppercase">
                Alaabteenna
              </p>
              <h2 className="mt-4 font-display text-3xl leading-snug md:text-4xl">
                Cabayado, jewelry iyo saacado ugu caansan.
              </h2>
            </div>
            <a
              href="#home"
              className="text-sm font-semibold text-[#0A192F] underline decoration-[#0A192F]/30 underline-offset-4 transition hover:decoration-[#0A192F]"
            >
              Dhammaan alaabta →
            </a>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {alaabta.map((p) => (
              <article key={p.name} className="group">
                <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-slate-100">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-5 flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-semibold tracking-[0.18em] text-[#4A7BAA] uppercase">
                      {p.tag}
                    </p>
                    <h3 className="mt-1.5 font-display text-xl">{p.name}</h3>
                  </div>
                  <p className="pt-1 text-sm font-semibold text-slate-700">${p.price}</p>
                </div>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{p.text}</p>
                <button
                  type="button"
                  onClick={() => addItem(p)}
                  className="mt-5 w-full rounded-lg border border-[#0A192F] py-2.5 text-sm font-semibold text-[#0A192F] transition hover:bg-[#0A192F] hover:text-white"
                >
                  Ku dar dambiisha
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-2xl font-display text-3xl leading-snug md:text-4xl">
            Waxa ay macaamiisheennu leeyihiin.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {raalliyo.map((r) => (
              <figure key={r.name} className="rounded-2xl bg-white p-8 shadow-sm">
                <div className="flex gap-1 text-[#C9A227]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.05 2.93c.3-.92 1.6-.92 1.9 0l1.32 4.06a1 1 0 00.95.69h4.27c.97 0 1.37 1.24.59 1.81l-3.46 2.51a1 1 0 00-.36 1.12l1.32 4.06c.3.92-.75 1.69-1.54 1.12l-3.45-2.51a1 1 0 00-1.18 0l-3.45 2.51c-.79.57-1.84-.2-1.54-1.12l1.32-4.06a1 1 0 00-.36-1.12L1.92 9.49c-.78-.57-.38-1.81.59-1.81h4.27a1 1 0 00.95-.69L9.05 2.93z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="mt-5 text-sm leading-relaxed text-slate-700">
                  “{r.text}”
                </blockquote>
                <figcaption className="mt-6 text-sm">
                  <span className="font-semibold">{r.name}</span>
                  <span className="text-slate-500"> — {r.city}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#0A192F]">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="p-10 md:p-14">
              <h2 className="font-display text-3xl leading-snug text-white md:text-4xl">
                Raadinaysaa cabayo cusub?
              </h2>
              <p className="mt-5 leading-relaxed text-white/70">
                Nala soo xiriir maanta — waxaan kuu caawinaynaa inaad hesho cabayada, jewelry-ga,
                ama saacadda kugu habboon.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="mailto:info@layan.so"
                  className="rounded-lg bg-white px-7 py-3.5 text-sm font-semibold text-[#0A192F] transition hover:bg-blue-100"
                >
                  Email noo dir
                </a>
                <a
                  href="tel:+252610000000"
                  className="rounded-lg border border-white/50 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
                >
                  +252 61 000 0000
                </a>
              </div>
            </div>
            <div className="hidden h-full md:block">
              <img
                src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80"
                alt="Jewelry dahab ah oo qurux badan"
                className="h-full min-h-[340px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white px-6 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
          <a href="#home" className="flex items-center">
            <img
              src="/logo.png"
              alt="Layaan"
              className="h-12 w-auto object-contain"
            />
          </a>
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-slate-600">
            <a href="#home" className="transition hover:text-[#0A192F]">Bogga Hore</a>
            <a href="#about" className="transition hover:text-[#0A192F]">Ku Saabsan</a>
            <a href="#service" className="transition hover:text-[#0A192F]">Adeegyada</a>
            <a href="#shop" className="transition hover:text-[#0A192F]">Alaabta</a>
          </nav>
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} Layaan. Xuquuqda way dhowran tahay.</p>
        </div>
      </footer>
    </div>
  )
}
