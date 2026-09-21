import React from 'react';
import Link from 'next/link';
import { Menu, ThermometerSun, ChevronDown } from 'lucide-react';

export default function KVKKPage() {
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
                  <Link
                    href="/kombi-tamiri"
                    className="px-4 py-3 text-sm hover:bg-slate-50 hover:text-orange-500 transition-colors"
                  >
                    Kombi Tamiri & Onarım
                  </Link>
                  <Link
                    href="/kombi-bakimi"
                    className="px-4 py-3 text-sm hover:bg-slate-50 hover:text-orange-500 transition-colors border-t border-slate-50"
                  >
                    Periyodik Kombi Bakımı
                  </Link>
                  <Link
                    href="/petek-temizligi"
                    className="px-4 py-3 text-sm hover:bg-slate-50 hover:text-orange-500 transition-colors border-t border-slate-50"
                  >
                    Makineli Petek Temizliği
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-orange-500 transition-colors py-8">
                Hizmet Bölgeleri <ChevronDown className="w-4 h-4" />
              </button>

              <div className="absolute top-20 left-0 w-48 bg-white shadow-xl border border-slate-100 rounded-b-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2 flex flex-col">
                  <Link
                    href="/bolgeler/cekmekoy"
                    className="px-4 py-3 text-sm hover:bg-slate-50 hover:text-orange-500 transition-colors"
                  >
                    Çekmeköy
                  </Link>
                  <Link
                    href="/bolgeler/sancaktepe"
                    className="px-4 py-3 text-sm hover:bg-slate-50 hover:text-orange-500 transition-colors border-t border-slate-50"
                  >
                    Sancaktepe
                  </Link>
                  <Link
                    href="/bolgeler/sultanbeyli"
                    className="px-4 py-3 text-sm hover:bg-slate-50 hover:text-orange-500 transition-colors border-t border-slate-50"
                  >
                    Sultanbeyli
                  </Link>
                  <Link
                    href="/bolgeler/umraniye"
                    className="px-4 py-3 text-sm hover:bg-slate-50 hover:text-orange-500 transition-colors border-t border-slate-50"
                  >
                    Ümraniye
                  </Link>
                  <Link
                    href="/bolgeler/kadikoy"
                    className="px-4 py-3 text-sm hover:bg-slate-50 hover:text-orange-500 transition-colors border-t border-slate-50"
                  >
                    Kadıköy
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/hakkimizda"
              className="hover:text-orange-500 transition-colors py-8"
            >
              Hakkımızda
            </Link>

            <Link
              href="/sss"
              className="hover:text-orange-500 transition-colors py-8"
            >
              SSS
            </Link>

            <Link
              href="/#iletisim"
              className="hover:text-orange-500 transition-colors py-8"
            >
              İletişim
            </Link>
          </nav>

          <button className="p-2 text-slate-600 hover:text-orange-500 transition-colors lg:hidden">
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
            KVKK Aydınlatma Metni
          </h1>

          <p className="text-slate-300 text-sm mb-3">
            Son güncelleme: 9 Eylül 2026
          </p>

          <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Kişisel verilerinizin hangi kapsamda toplandığı, hangi amaçlarla
            kullanıldığı, kimlerle paylaşılabildiği ve KVKK kapsamındaki
            haklarınız hakkında bilgilendirme metnidir.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-slate-700 leading-relaxed text-sm md:text-base">

          {/* 1 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
              1. Veri Sorumlusu ve Kapsam
            </h2>

            <p>
              Bu metin, 6698 sayılı Kişisel Verilerin Korunması Kanunu
              ("KVKK") doğrultusunda, İstanbul Kombi Teknik markasıyla
              sunulan kombi teknik servis hizmetleri ve internet sitesi
              faaliyetleri sırasında elde edilen kişisel verilerin nasıl
              değerlendirildiğini açıklamak amacıyla hazırlanmıştır.
            </p>

            <p className="mt-3">
              Kişisel verilerinizin işlenmesinden sorumlu kuruluş aşağıdaki
              iletişim bilgileri üzerinden tarafınıza ulaşılabilir.
            </p>

            <div className="mt-5 bg-slate-50 p-5 rounded-xl border border-slate-100 space-y-2 text-slate-800">
              <p>
                <strong>İşletme / Marka:</strong> İstanbul Kombi Teknik
              </p>
              <p>
                <strong>Adres:</strong> Meclis, Semih Sancar Cd. No:15,
                34785 Sancaktepe/İstanbul
              </p>
              <p>
                <strong>E-posta:</strong> info@istanbulkombiteknik.com.tr
              </p>
              <p>
                <strong>Telefon:</strong> 0 (536) 749 93 49
              </p>
              <p>
                <strong>Web sitesi:</strong> istanbulkombiteknik.com.tr
              </p>
            </div>
          </div>

          {/* 2 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
              2. Hangi Kişisel Veriler Toplanabilir?
            </h2>

            <p>
              Web sitemizi ziyaret etmeniz, servis talebi oluşturmanız veya
              teknik ekibimizle iletişime geçmeniz halinde, hizmetin
              niteliğine bağlı olarak çeşitli kişisel bilgileriniz
              işlenebilir.
            </p>

            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>
                <strong>Kimlik bilgileri:</strong> Ad ve soyad gibi sizi
                tanımlamaya yardımcı olan bilgiler.
              </li>

              <li>
                <strong>İletişim bilgileri:</strong> Telefon numarası ve
                tarafınızca paylaşılması halinde e-posta adresi.
              </li>

              <li>
                <strong>Servis bilgileri:</strong> Talep edilen hizmet,
                arızanın açıklaması, cihaz türü ve servis ihtiyacına ilişkin
                bilgiler.
              </li>

              <li>
                <strong>Adres ve konum bilgileri:</strong> Teknik servis
                ekibinin hizmet sunacağı adres ve gerekli durumlarda ilçe
                bilgisi.
              </li>

              <li>
                <strong>Cihaz bilgileri:</strong> Kombi veya diğer cihazların
                marka, model ve gerekli olması halinde seri numarası.
              </li>

              <li>
                <strong>Servis ve işlem kayıtları:</strong> Yapılan bakım,
                onarım, değiştirilen parçalar, ücret ve garanti kapsamında
                gerçekleştirilen işlemler.
              </li>

              <li>
                <strong>Web sitesi kullanım bilgileri:</strong> IP adresi,
                tarayıcı ve cihaz bilgileri, ziyaret edilen sayfalar,
                etkileşimler ve çerez tercihleri.
              </li>
            </ul>
          </div>

          {/* 3 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
              3. Verilerin Kullanılma Amaçları
            </h2>

            <p>
              Tarafımıza ulaştırdığınız bilgiler, yalnızca hizmetin
              gerçekleştirilebilmesi ve işletme faaliyetlerinin yürütülmesi
              için gerekli olduğu ölçüde kullanılır.
            </p>

            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Servis taleplerini almak ve randevu oluşturmak,</li>
              <li>
                Teknik ekibin doğru adres ve zamanda hizmet sunmasını
                sağlamak,
              </li>
              <li>
                Arıza, bakım ve onarım işlemlerini gerçekleştirmek,
              </li>
              <li>
                Servis öncesinde veya sonrasında sizinle iletişim kurmak,
              </li>
              <li>
                Yapılan işlemlere ilişkin servis ve garanti kayıtlarını
                oluşturmak,
              </li>
              <li>Fatura ve gerekli mali belgeleri düzenlemek,</li>
              <li>
                Hizmet kalitesini değerlendirmek ve operasyonlarımızı
                geliştirmek,
              </li>
              <li>
                Web sitesi güvenliğini korumak ve kötüye kullanım girişimlerini
                engellemek,
              </li>
              <li>
                Yetkili kamu kurum ve kuruluşlarının yasal taleplerini
                karşılamak,
              </li>
              <li>
                Web sitesi ziyaretleri ile reklam çalışmalarının
                istatistiksel olarak değerlendirilmesini sağlamak.
              </li>
            </ul>
          </div>

          {/* 4 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
              4. Kişisel Verilerin İşlenmesinin Hukuki Dayanakları
            </h2>

            <p>
              Kişisel bilgileriniz, KVKK'da belirtilen şartlar çerçevesinde
              ve işleme faaliyetinin niteliğine göre farklı hukuki
              dayanaklara dayanılarak işlenmektedir.
            </p>

            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>
                <strong>Sözleşmenin kurulması veya uygulanması:</strong> Servis
                randevusunun alınması, teknik hizmetin sağlanması ve garanti
                süreçlerinin yürütülmesi.
              </li>

              <li>
                <strong>Kanuni yükümlülükler:</strong> Vergi, fatura,
                muhasebe, tüketici mevzuatı ve diğer yasal gerekliliklerin
                yerine getirilmesi.
              </li>

              <li>
                <strong>Meşru menfaat:</strong> Bilgi güvenliği, dolandırıcılık
                ve kötüye kullanımın önlenmesi, hizmet kalitesinin
                geliştirilmesi gibi faaliyetler.
              </li>

              <li>
                <strong>Açık rıza:</strong> Rıza alınmasının gerekli olduğu
                analitik, reklam veya benzeri çerez ve pazarlama faaliyetleri.
              </li>
            </ul>
          </div>

          {/* 5 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
              5. Veriler Kimlerle Paylaşılabilir?
            </h2>

            <p>
              Kişisel bilgileriniz, hizmetin yerine getirilebilmesi veya
              kanuni yükümlülüklerin karşılanması için gerekli olduğu
              durumlarda sınırlı sayıda üçüncü tarafla paylaşılabilir.
            </p>

            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>
                Mali müşavirlik ve gerekli hallerde hukuki danışmanlık
                hizmeti veren profesyoneller,
              </li>

              <li>
                Yasal zorunluluk halinde yetkili kamu kurumları ve adli
                merciler,
              </li>

              <li>
                Web sitesi, güvenlik, form ve teknik altyapı hizmeti sunan
                teknoloji sağlayıcıları,
              </li>

              <li>
                Ölçümleme ve reklam hizmetlerinde kullanılan Google ve benzeri
                teknoloji sağlayıcıları,
              </li>

              <li>
                Kullanılan analiz ve kullanıcı deneyimi araçlarının hizmet
                sağlayıcıları.
              </li>
            </ul>

            <p className="mt-4">
              Hizmet altyapısında kullanılan bazı teknoloji şirketlerinin
              sistemleri Türkiye dışında bulunabilir. Böyle bir durumda
              kişisel verilerin yurt dışına aktarılması, KVKK'nın yurt dışı
              veri aktarımına ilişkin hükümleri dikkate alınarak ve gerekli
              hukuki şartlar sağlanarak gerçekleştirilir.
            </p>
          </div>

          {/* 6 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
              6. Web Sitesi, Çerezler ve Teknik Veriler
            </h2>

            <p>
              Web sitemizi kullandığınızda, sitenin çalışmasını sağlamak,
              güvenliği korumak ve kullanıcı deneyimini geliştirmek amacıyla
              bazı teknik bilgiler otomatik olarak elde edilebilir.
            </p>

            <p className="mt-3">
              Bu kapsamda IP adresi, kullanılan cihaz ve tarayıcı türü,
              ziyaret edilen sayfalar, sayfada geçirilen süre, yönlendirme
              kaynağı ve benzeri teknik kullanım verileri işlenebilir.
            </p>

            <p className="mt-3">
              Analitik, reklam ve benzeri isteğe bağlı çerezler ise
              tercihlerinize bağlı olarak kullanılabilir. Çerezlere ilişkin
              ayrıntılı açıklamalar ilgili Çerez Politikamızda yer almaktadır.
            </p>
          </div>

          {/* 7 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
              7. Kişisel Verilerin Saklanması
            </h2>

            <p>
              Kişisel verileriniz, toplandıkları amacın gerektirdiği süre
              boyunca veya ilgili mevzuatta daha uzun bir süre öngörülmüşse
              bu yasal süreler boyunca muhafaza edilir.
            </p>

            <p className="mt-3">
              Servis, fatura, garanti ve muhasebe kayıtları; ilgili
              mevzuattaki zamanaşımı ve saklama yükümlülükleri dikkate
              alınarak saklanır. Saklama süresinin sona ermesinden sonra
              veriler, uygulanabilir mevzuata uygun şekilde silinir, yok
              edilir veya anonim hale getirilir.
            </p>
          </div>

          {/* 8 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
              8. KVKK Kapsamındaki Haklarınız
            </h2>

            <p>
              KVKK'nın 11. maddesi kapsamında kişisel verilerinizle ilgili
              olarak aşağıdaki haklardan yararlanabilirsiniz:
            </p>

            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Verilerinizin işlenip işlenmediğini öğrenme,</li>
              <li>
                İşleme faaliyetleri hakkında bilgi isteme,
              </li>
              <li>
                Verilerinizin hangi amaçla kullanıldığını öğrenme,
              </li>
              <li>
                Verilerin yurt içinde veya yurt dışında kimlere aktarıldığını
                öğrenme,
              </li>
              <li>
                Hatalı veya eksik kayıtların düzeltilmesini talep etme,
              </li>
              <li>
                Kanuni şartların oluşması halinde verilerinizin silinmesini
                veya yok edilmesini isteme,
              </li>
              <li>
                Düzeltme veya silme taleplerinin verilerin aktarıldığı
                üçüncü taraflara bildirilmesini isteme,
              </li>
              <li>
                Münhasıran otomatik sistemlerle gerçekleştirilen analizler
                sonucunda aleyhinize bir durum oluşmasına itiraz etme,
              </li>
              <li>
                Kanuna aykırı veri işleme nedeniyle zarar oluşması halinde
                zararınızın giderilmesini talep etme.
              </li>
            </ul>
          </div>

          {/* 9 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
              9. Başvuru ve İletişim
            </h2>

            <p>
              KVKK kapsamında sahip olduğunuz hakları kullanmak veya
              kişisel verilerinizle ilgili bir talepte bulunmak isterseniz
              aşağıdaki iletişim kanallarını kullanabilirsiniz.
            </p>

            <div className="mt-5 bg-orange-50 border border-orange-100 rounded-xl p-5 text-slate-800 space-y-2">
              <p>
                <strong>E-posta:</strong>{' '}
                info@istanbulkombiteknik.com.tr
              </p>

              <p>
                <strong>Adres:</strong> Meclis, Semih Sancar Cd. No:15,
                34785 Sancaktepe/İstanbul
              </p>
            </div>

            <p className="mt-4">
              Yazılı başvurularınızda kimliğinizi doğrulamaya yarayan
              bilgilerin ve talebinizin açık şekilde belirtilmesi gerekir.
              Başvurular, KVKK ve ilgili ikincil mevzuatta öngörülen usul ve
              süreler içerisinde değerlendirilerek sonuçlandırılır.
            </p>

            <p className="mt-3">
              Talebinizin reddedilmesi, verilen cevabın yetersiz olması veya
              yasal süre içerisinde cevap verilmemesi halinde KVKK kapsamında
              Kişisel Verileri Koruma Kurulu'na başvuru hakkınız
              bulunmaktadır.
            </p>
          </div>

          {/* 10 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
              10. Metindeki Değişiklikler
            </h2>

            <p>
              Hizmet süreçlerimizde, kullandığımız teknolojilerde veya
              yürürlükteki mevzuatta meydana gelebilecek değişiklikler
              doğrultusunda bu Aydınlatma Metni güncellenebilir.
            </p>

            <p className="mt-3">
              Güncel versiyonu ve son değişiklik tarihini bu sayfa üzerinden
              takip edebilirsiniz.
            </p>
          </div>

          {/* IMPORTANT NOTICE */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
            <h3 className="font-bold text-slate-900 mb-2">
              Son Güncelleme
            </h3>

            <p className="text-slate-600">
              Bu KVKK Aydınlatma Metni 9 Eylül 2026 tarihinde güncellenmiştir.
            </p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-400 py-12 text-center md:text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-8">

          <div>
            <div className="flex items-center gap-2 justify-center md:justify-start mb-4">
              <ThermometerSun className="w-6 h-6 text-orange-500" />

              <span className="text-xl font-black text-white tracking-tight">
                İstanbul Kombi<span className="text-orange-500">Teknik</span>
              </span>
            </div>

            <p className="text-sm">
              İstanbul genelinde güvenilir, hızlı ve garantili kombi teknik
              servis hizmetleri.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">
              İletişim
            </h4>

            <ul className="space-y-2 text-sm">
              <li>0 (536) 749 93 49</li>
              <li>info@istanbulkombiteknik.com.tr</li>
              <li>
                Meclis, Semih Sancar Cd. No:15,
                34785 Sancaktepe/İstanbul
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">
              Hizmet Bölgeleri
            </h4>

            <p className="text-sm leading-relaxed">
              Çekmeköy, Sancaktepe, Sultanbeyli, Ümraniye ve Kadıköy
              bölgelerine hizmet veriyoruz.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">
              Yasal / Mevzuat
            </h4>

            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/kvkk-aydinlatma-metni"
                  className="hover:text-orange-400 transition-colors"
                >
                  KVKK Aydınlatma Metni
                </Link>
              </li>

              <li>
                <Link
                  href="/gizlilik-politikasi"
                  className="hover:text-orange-400 transition-colors"
                >
                  Gizlilik ve Çerez Politikası
                </Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-sm text-center">
          <p>
            © 2026 İstanbul Kombi Teknik. Tüm hakları saklıdır.
          </p>
        </div>
      </footer>
    </div>
  );
}
