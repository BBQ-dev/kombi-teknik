import React from 'react';
import Link from 'next/link';
import { Menu, ThermometerSun, PhoneCall, ChevronDown, AlertCircle, Flame, Droplets, Wrench, CheckCircle2 } from 'lucide-react';

export default function KombiTamiri() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* HEADER (Ana sayfa ile birebir aynı) */}
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
                  <Link href="/kombi-tamiri" className="px-4 py-3 text-sm text-orange-500 bg-slate-50 transition-colors">Kombi Tamiri & Onarım</Link>
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

      {/* SAYFA BAŞLIĞI (İç Sayfa Hero Alanı) */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Profesyonel Kombi Tamiri</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Arızalanan kombinizi yerinde tespit ediyor, orijinal yedek parça ve 1 yıl işçilik garantisiyle aynı gün onarıyoruz.
          </p>
        </div>
      </section>

      {/* SIK KARŞILAŞILAN ARIZALAR */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Sık Karşılaşılan Kombi Arızaları</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full mb-8"></div>
            <p className="text-slate-600 max-w-3xl mx-auto text-lg">Eğer kombinide aşağıdaki sorunlardan birini yaşıyorsanız, cihaza müdahale etmeden hemen teknik servisimizi arayınız.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col items-center text-center">
              <Flame className="w-10 h-10 text-orange-500 mb-4" />
              <h3 className="text-lg font-bold mb-2">Sıcak Su Vermiyor</h3>
              <p className="text-sm text-slate-600">Sensör, tribün veya üç yollu vana arızalarından kaynaklanabilir.</p>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col items-center text-center">
              <AlertCircle className="w-10 h-10 text-orange-500 mb-4" />
              <h3 className="text-lg font-bold mb-2">Petekler Isınmıyor</h3>
              <p className="text-sm text-slate-600">Sirkülasyon pompası arızası veya filtre tıkanıklığı sebebiyle oluşur.</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col items-center text-center">
              <Droplets className="w-10 h-10 text-orange-500 mb-4" />
              <h3 className="text-lg font-bold mb-2">Su Akıtıyor / Eksiltiyor</h3>
              <p className="text-sm text-slate-600">Genleşme tankı havası bitmiş veya emniyet ventili bozulmuş olabilir.</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col items-center text-center">
              <Wrench className="w-10 h-10 text-orange-500 mb-4" />
              <h3 className="text-lg font-bold mb-2">Sesli Çalışıyor</h3>
              <p className="text-sm text-slate-600">Fan motoru veya pompa yataklarındaki aşınmalardan kaynaklanan gürültülerdir.</p>
            </div>
          </div>
        </div>
      </section>

      {/* NASIL ÇALIŞIYORUZ? (Güven Aşılayan Adımlar) */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Tamir Sürecimiz Nasıl İşliyor?</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 font-bold">1</div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Arıza Tespiti</h4>
                    <p className="text-slate-600">Adresinize gelen uzman ekibimiz cihazdaki arızanın kaynağını teknolojik cihazlarla nokta atışı tespit eder.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 font-bold">2</div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Fiyat Onayı</h4>
                    <p className="text-slate-600">Yapılacak işlem ve değişecek yedek parçaların şeffaf fiyatı size sunulur. Sürpriz maliyetlerle karşılaşmazsınız.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 font-bold">3</div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Onarım ve Test</h4>
                    <p className="text-slate-600">Onayınızla birlikte işlem başlar. Orijinal parça kullanılır ve cihaz çalışır durumda test edilerek size teslim edilir.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 bg-slate-900 p-8 md:p-12 rounded-3xl text-center">
              <CheckCircle2 className="w-16 h-16 text-orange-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">1 Yıl Garanti Belgesi</h3>
              <p className="text-slate-300 mb-8">Değiştirilen tüm yedek parçalar ve sunduğumuz işçilik hizmeti 1 tam yıl boyunca firmamızın garantisi altındadır. İşlem sonrasında servis formunuz dijital ve basılı olarak teslim edilir.</p>
              <a href="tel:+905365499349" className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold transition-colors w-full sm:w-auto">
                <PhoneCall className="w-5 h-5" />
                Servis Çağır
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER (Ana sayfa ile birebir aynı) */}
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