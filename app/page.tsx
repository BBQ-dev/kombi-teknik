'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Wrench, ThermometerSun, ShieldCheck, Clock, PhoneCall, ChevronRight, ChevronDown, MessageCircle } from 'lucide-react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* HEADER */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <ThermometerSun className="w-8 h-8 text-orange-500" />
            <span className="text-2xl font-black text-slate-900 tracking-tight">
              İstanbul Kombi<span className="text-orange-500">Teknik</span>
            </span>
          </Link>
          
          {/* Masaüstü Menü (Açılır Menü / Dropdown Destekli) */}
          <nav className="hidden lg:flex items-center gap-8 font-semibold text-slate-600">
            
            {/* Hizmetler Dropdown */}
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

            {/* Hizmet Bölgeleri Dropdown */}
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
            <Link href="#iletisim" className="hover:text-orange-500 transition-colors py-8">İletişim</Link>
          </nav>

          {/* Mobil Menü Butonu */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-600 hover:text-orange-500 transition-colors lg:hidden focus:outline-none"
            aria-label="Mobil Menü"
          >
            {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* Mobil Menü Açılır Paneli */}
        {mobileMenuOpen && (
          <div className="absolute top-20 left-0 w-full bg-white border-b border-slate-200 shadow-2xl lg:hidden transition-all z-50">
            <div className="px-6 py-6 flex flex-col gap-4 font-medium text-slate-700 max-h-[80vh] overflow-y-auto">
              
              <div className="font-bold text-orange-500 text-xs uppercase tracking-wider">Hizmetlerimiz</div>
              <Link href="/kombi-tamiri" onClick={() => setMobileMenuOpen(false)} className="pl-3 py-1 hover:text-orange-500 text-sm">Kombi Tamiri & Onarım</Link>
              <Link href="/kombi-bakimi" onClick={() => setMobileMenuOpen(false)} className="pl-3 py-1 hover:text-orange-500 text-sm">Periyodik Kombi Bakımı</Link>
              <Link href="/petek-temizligi" onClick={() => setMobileMenuOpen(false)} className="pl-3 py-1 hover:text-orange-500 text-sm">Makineli Petek Temizliği</Link>
              
              <div className="font-bold text-orange-500 text-xs uppercase tracking-wider pt-3 border-t border-slate-100">Hizmet Bölgeleri</div>
              <Link href="/bolgeler/cekmekoy" onClick={() => setMobileMenuOpen(false)} className="pl-3 py-1 hover:text-orange-500 text-sm">Çekmeköy</Link>
              <Link href="/bolgeler/sancaktepe" onClick={() => setMobileMenuOpen(false)} className="pl-3 py-1 hover:text-orange-500 text-sm">Sancaktepe</Link>
              <Link href="/bolgeler/sultanbeyli" onClick={() => setMobileMenuOpen(false)} className="pl-3 py-1 hover:text-orange-500 text-sm">Sultanbeyli</Link>
              <Link href="/bolgeler/umraniye" onClick={() => setMobileMenuOpen(false)} className="pl-3 py-1 hover:text-orange-500 text-sm">Ümraniye</Link>
              <Link href="/bolgeler/kadikoy" onClick={() => setMobileMenuOpen(false)} className="pl-3 py-1 hover:text-orange-500 text-sm">Kadıköy</Link>

              <div className="pt-3 border-t border-slate-100 flex flex-col gap-3 font-semibold">
                <Link href="/hakkimizda" onClick={() => setMobileMenuOpen(false)} className="hover:text-orange-500">Hakkımızda</Link>
                <Link href="/sss" onClick={() => setMobileMenuOpen(false)} className="hover:text-orange-500">SSS</Link>
                <Link href="#iletisim" onClick={() => setMobileMenuOpen(false)} className="hover:text-orange-500">İletişim</Link>
              </div>

            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative bg-slate-900 text-white py-24 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://plus.unsplash.com/premium_photo-1658506646178-e4ef5810361b?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="İstanbul Kombi Teknik Çağrı Merkezi" 
            className="w-full h-full object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/80"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
          <span className="px-4 py-1.5 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30 text-sm font-semibold tracking-wide mb-6 backdrop-blur-md">
            TAM BAĞIMSIZ ÖZEL KOMBİ SERVİSİ
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-md">
            Kışın Ortasında <br className="hidden md:block"/> Soğukta Kalmayın.
          </h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-2xl mb-10 drop-shadow">
            Kombi arızaları, periyodik bakım ve petek temizliği için aynı gün garantili servis hizmeti sunuyoruz. Uzman ekip, şeffaf fiyat.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
            <a href="tel:+905367499349" className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-xl shadow-orange-500/40">
              <PhoneCall className="w-5 h-5" />
              Hemen Servis Çağır
            </a>
            <a 
              href="https://wa.me/905367499349?text=Merhaba,%20kombi%20servisi%20için%20ulaşıyorum.%20Yardımcı%20olabilir misiniz?" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-xl shadow-emerald-600/30"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Destek
            </a>
            <a href="#hizmetler" className="flex items-center justify-center gap-2 bg-slate-900/70 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all border border-slate-600 backdrop-blur-md shadow-lg">
              Hizmetlerimizi İncele
            </a>
          </div>
        </div>
      </section>

      {/* HİZMETLERİMİZ */}
      <section id="hizmetler" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Size Nasıl Yardımcı Olabiliriz?</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-orange-200 transition-colors group flex flex-col h-full">
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Wrench className="w-7 h-7 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Kombi Tamiri & Onarım</h3>
              <p className="text-slate-600 mb-6 flex-grow">Her marka kombinizin elektronik kart, pompa, fan ve sensör arızalarını orijinal yedek parça ile evinizde çözüyoruz.</p>
              <Link href="/kombi-tamiri" className="text-orange-500 font-semibold flex items-center gap-1 hover:gap-2 transition-all mt-auto w-fit">
                Detaylı Bilgi <ChevronRight className="w-4 h-4"/>
              </Link>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-orange-200 transition-colors group flex flex-col h-full">
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ThermometerSun className="w-7 h-7 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Periyodik Kombi Bakımı</h3>
              <p className="text-slate-600 mb-6 flex-grow">Faturanızdan tasarruf etmek ve kışı sorunsuz geçirmek için cihazınızın detaylı kışlık bakımını yapıyoruz.</p>
              <Link href="/kombi-bakimi" className="text-orange-500 font-semibold flex items-center gap-1 hover:gap-2 transition-all mt-auto w-fit">
                Detaylı Bilgi <ChevronRight className="w-4 h-4"/>
              </Link>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-orange-200 transition-colors group flex flex-col h-full">
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-7 h-7 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Makineli Petek Temizliği</h3>
              <p className="text-slate-600 mb-6 flex-grow">Özel kimyasallar ve çift yönlü makinelerimizle peteklerinizdeki çamuru temizliyor, ısı verimini %30'a kadar artırıyoruz.</p>
              <Link href="/petek-temizligi" className="text-orange-500 font-semibold flex items-center gap-1 hover:gap-2 transition-all mt-auto w-fit">
                Detaylı Bilgi <ChevronRight className="w-4 h-4"/>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVİS VERDİĞİMİZ MARKALAR */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-orange-500 font-semibold tracking-wide uppercase text-sm">Geniş Yedek Parça & Uzmanlık</span>
          <h2 className="text-3xl font-bold text-slate-900 mt-2 mb-4">Servis Verdiğimiz Başlıca Kombi Markaları</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-10">
            İstanbul Kombi Teknik olarak, Anadolu yakasındaki tüm kombi markalarına ve modellerine <strong>özel teknik servis</strong>, orijinal yedek parça değişimi ve 1 yıl işçilik garantisi sunuyoruz.
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {['Vaillant', 'Bosch', 'Demirdöküm', 'ECA', 'Baymak', 'Viessmann', 'Alarko', 'Buderus', 'Ferroli', 'Protherm', 'Baykan', 'Immergas'].map((brand) => (
              <div key={brand} className="bg-slate-50 hover:bg-orange-50 border border-slate-200 hover:border-orange-200 p-4 rounded-xl font-bold text-slate-800 hover:text-orange-600 transition-all shadow-sm flex items-center justify-center">
                {brand}
              </div>
            ))}
          </div>

          <p className="text-xs text-slate-400 mt-6 max-w-3xl mx-auto">
            * Sitemizde adı geçen markalar, ilgili firmaların tescilli ticari markalarıdır. Firmamız anılan markaların <strong>özel servisi</strong> olarak tamir, bakım ve onarım hizmeti vermektedir. Yetkili servis değiliz.
          </p>
        </div>
      </section>

      {/* NEDEN BİZ? */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Clock className="w-12 h-12 text-slate-800 mb-4" />
              <h4 className="text-xl font-bold mb-2">Aynı Gün Servis</h4>
              <p className="text-slate-600">Arıza kaydınızı oluşturun, gezici ekiplerimiz saatler içinde kapınızda olsun.</p>
            </div>
            <div className="flex flex-col items-center">
              <ShieldCheck className="w-12 h-12 text-slate-800 mb-4" />
              <h4 className="text-xl font-bold mb-2">1 Yıl Parça Garantisi</h4>
              <p className="text-slate-600">Değiştirdiğimiz tüm yedek parçalar ve işçiliğimiz 1 yıl firmamızın garantisi altındadır.</p>
            </div>
            <div className="flex flex-col items-center">
              <PhoneCall className="w-12 h-12 text-slate-800 mb-4" />
              <h4 className="text-xl font-bold mb-2">7/24 Destek</h4>
              <p className="text-slate-600">Acil kaçakları ve su akıtmaları için gece gündüz demeden bize ulaşabilirsiniz.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="iletisim" className="bg-slate-950 text-slate-400 py-12 text-center md:text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-8">
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
            <ul className="space-y-2 text-sm mb-4">
              <li>0 (536) 549 93 49</li>
              <li>info@istanbulkombiteknik.com.tr</li>
              <li>Meclis, Semih Sancar Cd. No:15, 34785 Sancaktepe/İstanbul</li>
            </ul>
            {/* React/JSX uyumlu hale getirilmiş ve footer sütununa tam oturacak şekilde ayarlanmış harita */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.562370358071!2d29.20244907519732!3d41.01295091913841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cace491d77b295%3A0x75d8c3516ce6836b!2sMeclis%2C%20Semih%20Sancar%20Cd.%20No%3A15%2C%2034785%20Sancaktepe%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1789000850926!5m2!1str!2str" 
              width="100%" 
              height="180" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="strict-origin-when-cross-origin"
              className="rounded-xl shadow-md w-full"
            ></iframe>
          </div>
          <div id="bolgeler">
            <h4 className="text-white font-bold mb-4">Hizmet Bölgeleri</h4>
            <p className="text-sm leading-relaxed">
              Çekmeköy, Sancaktepe, Sultanbeyli, Ümraniye ve Kadıköy bölgelerine hizmet veriyoruz.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Yasal / Mevzuat</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/kvkk-aydinlatma-metni" className="hover:text-orange-400 transition-colors">KVKK Aydınlatma Metni</Link></li>
              <li><Link href="/gizlilik-politikasi" className="hover:text-orange-400 transition-colors">Gizlilik ve Çerez Politikası</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 text-sm text-center">
          <p>© 2026 İstanbul Kombi Teknik. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  );
}