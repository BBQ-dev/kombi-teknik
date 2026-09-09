import React from 'react';
import Link from 'next/link';
import { Menu, ThermometerSun, PhoneCall, ChevronDown, MapPin, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

const districtData: Record<string, { title: string; desc: string }> = {
  cekmekoy: {
    title: 'Çekmeköy Kombi Servisi',
    desc: 'Çekmeköy genelinde kombi tamiri, petek temizliği ve periyodik bakım hizmetlerini aynı gün içerisinde garantili olarak sunuyoruz.'
  },
  sancaktepe: {
    title: 'Sancaktepe Kombi Servisi',
    desc: 'Merkez adresimizin bulunduğu Sancaktepe ve tüm mahallelerine en hızlı şekilde mobil ekiplerimizi yönlendiriyoruz.'
  },
  sultanbeyli: {
    title: 'Sultanbeyli Kombi Servisi',
    desc: 'Sultanbeyli bölgesinde kombi arızalarına karşı 7/24 kesintisiz acil teknik servis ve bakım hizmeti sağlıyoruz.'
  },
  umraniye: {
    title: 'Ümraniye Kombi Servisi',
    desc: 'Ümraniye\'nin tüm semtlerine uzman kadromuz ve orijinal yedek parçalarımızla profesyonel kombi onarım hizmeti veriyoruz.'
  },
  kadikoy: {
    title: 'Kadıköy Kombi Servisi',
    desc: 'Kadıköy bölgesindeki ev ve iş yerleriniz için kombi bakım, petek temizliği ve kart tamiri hizmetleri sunmaktayız.'
  }
};

export default async function BolgePage({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const district = districtData[slug] || {
    title: 'İstanbul Kombi Servisi',
    desc: 'İstanbul Anadolu yakası genelinde profesyonel kombi teknik servis hizmetleri.'
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* HEADER */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <ThermometerSun className="w-8 h-8 text-orange-500" />
            <span className="text-2xl font-black text-slate-900 tracking-tight">
              İstanbul Kombi<span className="text-orange-500">Teknik</span>
            </span>
          </Link>
          
          <nav className="hidden lg:flex items-center gap-8 font-semibold text-slate-600">
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-orange-500 transition-colors py-8">
                Hizmetler <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-20 left-0 w-56 bg-white shadow-xl border border-slate-100 rounded-b-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2 flex flex-col">
                  <Link href="/kombi-tamiri" className="px-4 py-3 text-sm hover:bg-slate-50 hover:text-orange-500 transition-colors">Kombi Tamiri & Onarım</Link>
                  <Link href="/kombi-bakimi" className="px-4 py-3 text-sm hover:bg-slate-50 hover:text-orange-500 transition-colors border-t border-slate-50">Periyodik Kombi Bakımı</Link>
                  <Link href="/petek-temizligi" className="px-4 py-3 text-sm hover:bg-slate-50 hover:text-orange-500 transition-colors border-t border-slate-50">Makineli Petek Temizliği</Link>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-orange-500 transition-colors py-8">
                Hizmet Bölgeleri <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-20 left-0 w-48 bg-white shadow-xl border border-slate-100 rounded-b-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2 flex flex-col">
                  <Link href="/bolgeler/cekmekoy" className="px-4 py-3 text-sm hover:bg-slate-50 hover:text-orange-500 transition-colors">Çekmeköy</Link>
                  <Link href="/bolgeler/sancaktepe" className="px-4 py-3 text-sm hover:bg-slate-50 hover:text-orange-500 transition-colors border-t border-slate-50">Sancaktepe</Link>
                  <Link href="/bolgeler/sultanbeyli" className="px-4 py-3 text-sm hover:bg-slate-50 hover:text-orange-500 transition-colors border-t border-slate-50">Sultanbeyli</Link>
                  <Link href="/bolgeler/umraniye" className="px-4 py-3 text-sm hover:bg-slate-50 hover:text-orange-500 transition-colors border-t border-slate-50">Ümraniye</Link>
                  <Link href="/bolgeler/kadikoy" className="px-4 py-3 text-sm hover:bg-slate-50 hover:text-orange-500 transition-colors border-t border-slate-50">Kadıköy</Link>
                </div>
              </div>
            </div>

            <Link href="/hakkimizda" className="hover:text-orange-500 transition-colors py-8">Hakkımızda</Link>
            <Link href="/sss" className="hover:text-orange-500 transition-colors py-8">SSS</Link>
            <Link href="/#iletisim" className="hover:text-orange-500 transition-colors py-8">İletişim</Link>
          </nav>

          <button className="p-2 text-slate-600 hover:text-orange-500 transition-colors lg:hidden">
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </header>

      {/* BÖLGE HERO ALANI */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/20 text-orange-400 text-sm font-semibold mb-6">
            <MapPin className="w-4 h-4" /> Bölgesel Teknik Servis Ağı
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">{district.title}</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            {district.desc}
          </p>
        </div>
      </section>

      {/* BÖLGE DETAYLARI */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 flex flex-col items-center text-center">
              <Clock className="w-10 h-10 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Hızlı Ulaşım</h3>
              <p className="text-slate-600">Bölgenizde konumlanmış gezici servis araçlarımız sayesinde çağrınıza en kısa sürede yanıt veriyoruz.</p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 flex flex-col items-center text-center">
              <ShieldCheck className="w-10 h-10 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">1 Yıl Garanti</h3>
              <p className="text-slate-600">Yapılan tüm tamirat işlemleri ve değiştirilen yedek parçalar firmamızın 1 yıl güvencesi altındadır.</p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 flex flex-col items-center text-center">
              <CheckCircle2 className="w-10 h-10 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Orijinal Parça</h3>
              <p className="text-slate-600">Kombinizin markası ne olursa olsun sadece üretici onaylı orijinal yedek parçalar kullanıyoruz.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ÇAĞRI ALANI */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Bu Bölgeden Servis Çağırmak Çok Kolay</h3>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto">Hemen bizi arayın, ekibimiz adresinize gelerek kombi sorunlarınızı yerinde ve ekonomik şekilde çözsün.</p>
          <a href="tel:+905365499349" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg">
            <PhoneCall className="w-5 h-5" />
            Hemen Ara: 0 (536) 549 93 49
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-400 py-12 text-center md:text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 justify-center md:justify-start mb-4">
              <ThermometerSun className="w-6 h-6 text-orange-500" />
              <span className="text-xl font-black text-white tracking-tight">
                İstanbul Kombi<span className="text-orange-500">Teknik</span>
              </span>
            </div>
            <p className="text-sm">İstanbul genelinde güvenilir, hızlı ve garantili kombi teknik servis hizmetleri.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">İletişim</h4>
            <ul className="space-y-2 text-sm">
              <li>0 (536) 549 93 49</li>
              <li>info@istanbulkombiteknik.com.tr</li>
              <li>Meclis, Semih Sancar Cd. No:15, 34785 Sancaktepe/İstanbul</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Hizmet Bölgeleri</h4>
            <p className="text-sm leading-relaxed">
              Çekmeköy, Sancaktepe, Sultanbeyli, Ümraniye ve Kadıköy bölgelerine hizmet veriyoruz.
            </p>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 text-sm text-center">
          <p>© 2026 İstanbul Kombi Teknik. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  );
}