import React from 'react';
import Link from 'next/link';
import { Menu, ThermometerSun, ChevronDown } from 'lucide-react';

export default function GizlilikPage() {
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
            Gizlilik ve Çerez Politikası
          </h1>

          <p className="text-slate-300 text-sm mb-3">
            Son güncelleme: 9 Eylül 2026
          </p>

          <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
            İstanbul Kombi Teknik web sitesini kullanırken bilgilerinizin
            gizliliğini korumak ve hangi teknik verilerin işlendiği konusunda
            sizi bilgilendirmek için bu politika hazırlanmıştır.
          </p>

        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-slate-700 leading-relaxed text-sm md:text-base">

          {/* 1 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
              1. Gizlilik Politikamızın Kapsamı
            </h2>

            <p>
              İstanbul Kombi Teknik olarak internet sitemizi ziyaret eden
              kullanıcıların ve teknik servis hizmetlerimizden yararlanan
              müşterilerin bilgilerinin güvenliğine önem veriyoruz.
            </p>

            <p className="mt-3">
              Bu politika; internet sitemizi ziyaret ettiğinizde otomatik
              olarak oluşabilecek teknik verileri, iletişim formları
              aracılığıyla tarafımıza gönderdiğiniz bilgileri ve çerez
              teknolojilerinin kullanımını açıklamak amacıyla hazırlanmıştır.
            </p>

            <p className="mt-3">
              Kişisel verilerinizin işlenmesine ilişkin daha ayrıntılı
              açıklamalar için ayrıca{' '}
              <Link
                href="/kvkk-aydinlatma-metni"
                className="text-orange-500 font-semibold hover:underline"
              >
                KVKK Aydınlatma Metni
              </Link>{' '}
              sayfamızı inceleyebilirsiniz.
            </p>
          </div>

          {/* 2 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
              2. Toplanabilecek Bilgiler
            </h2>

            <p>
              Web sitemizi kullanmanız ve bizimle iletişime geçmeniz sırasında
              hizmetin niteliğine göre aşağıdaki bilgiler elde edilebilir:
            </p>

            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>
                Ad ve soyad,
              </li>

              <li>
                Telefon numarası,
              </li>

              <li>
                E-posta adresi,
              </li>

              <li>
                Servis hizmetinin verileceği adres veya bölge bilgisi,
              </li>

              <li>
                Arızalı veya bakım yapılacak cihazın marka ve model bilgileri,
              </li>

              <li>
                Servis talebinizle ilgili tarafınızca gönderilen açıklamalar,
              </li>

              <li>
                IP adresi ve bağlantı bilgileri,
              </li>

              <li>
                Kullanılan cihaz, işletim sistemi ve tarayıcı bilgileri,
              </li>

              <li>
                Ziyaret edilen sayfalar ve site içerisindeki etkileşimler,
              </li>

              <li>
                Çerez tercihleri ve benzeri teknik bilgiler.
              </li>
            </ul>
          </div>

          {/* 3 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
              3. Bilgilerin Kullanım Amaçları
            </h2>

            <p>
              Elde edilen bilgiler, ihtiyaç duyulan hizmetin sağlanması ve
              internet sitemizin güvenli ve verimli biçimde çalışması için
              kullanılabilir.
            </p>

            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Servis taleplerini almak ve değerlendirmek,</li>
              <li>Randevu ve servis organizasyonunu yapmak,</li>
              <li>Teknik servis ekibinin müşteriyle iletişim kurmasını sağlamak,</li>
              <li>Talep edilen bakım veya onarım hizmetini gerçekleştirmek,</li>
              <li>Servis ve garanti kayıtlarını takip etmek,</li>
              <li>Faturalandırma süreçlerini yürütmek,</li>
              <li>Web sitesinin performansını ve güvenliğini geliştirmek,</li>
              <li>Kullanıcı deneyimini iyileştirmek,</li>
              <li>İstatistiksel analizler yapmak,</li>
              <li>Dolandırıcılık, kötüye kullanım ve güvenlik tehditlerini önlemek.</li>
            </ul>
          </div>

          {/* 4 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
              4. Çerezler Nedir?
            </h2>

            <p>
              Çerezler, internet sitesini ziyaret ettiğinizde tarayıcınız
              aracılığıyla cihazınıza kaydedilebilen küçük veri dosyalarıdır.
              Bu teknolojiler, sitenin temel fonksiyonlarının çalışmasına
              yardımcı olabildiği gibi kullanım alışkanlıklarının
              değerlendirilmesi amacıyla da kullanılabilir.
            </p>

            <p className="mt-3">
              Çerezler tek başına her zaman doğrudan kimliğinizi belirlemek
              amacıyla kullanılmaz. Ancak bazı çerezlerden elde edilen
              bilgilerin başka verilerle birleştirilmesi halinde kişisel veri
              niteliği kazanabileceği durumlar olabilir.
            </p>
          </div>

          {/* 5 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
              5. Kullandığımız Çerez Türleri
            </h2>

            <div className="space-y-5">

              <div className="bg-slate-50 border border-slate-100 rounded-xl p-5">
                <h3 className="font-bold text-slate-900 mb-2">
                  Zorunlu Çerezler
                </h3>

                <p>
                  Web sitesinin temel fonksiyonlarının çalışabilmesi,
                  güvenliğin sağlanması ve kullanıcı tarafından talep edilen
                  hizmetlerin sunulabilmesi için gerekli olan çerezlerdir.
                  Bu çerezler devre dışı bırakıldığında sitenin bazı
                  bölümleri düzgün çalışmayabilir.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-100 rounded-xl p-5">
                <h3 className="font-bold text-slate-900 mb-2">
                  Tercih Çerezleri
                </h3>

                <p>
                  Dil, kullanıcı tercihleri veya daha önce seçilmiş bazı
                  ayarların hatırlanmasına yardımcı olan çerezlerdir.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-100 rounded-xl p-5">
                <h3 className="font-bold text-slate-900 mb-2">
                  Analitik Çerezler
                </h3>

                <p>
                  Ziyaretçilerin web sitesini nasıl kullandığını anlamak,
                  hangi sayfaların daha fazla ziyaret edildiğini görmek ve
                  sitenin performansını geliştirmek amacıyla kullanılabilir.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-100 rounded-xl p-5">
                <h3 className="font-bold text-slate-900 mb-2">
                  Reklam ve Pazarlama Çerezleri
                </h3>

                <p>
                  Reklamların ölçümlenmesi, reklam kampanyalarının
                  performansının değerlendirilmesi veya kullanıcıya daha
                  ilgili reklamların gösterilmesi amacıyla kullanılabilen
                  çerezlerdir. Bu tür çerezler, gerekli olduğu durumlarda
                  kullanıcı tercihine bağlı olarak çalıştırılır.
                </p>
              </div>

            </div>
          </div>

          {/* 6 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
              6. Analiz ve Kullanıcı Deneyimi Araçları
            </h2>

            <p>
              Web sitemizin kullanımını ve performansını değerlendirmek
              amacıyla üçüncü taraf analiz ve kullanıcı deneyimi araçlarından
              yararlanılabilir.
            </p>

            <p className="mt-3">
              Bu araçlar; ziyaret edilen sayfalar, sayfada geçirilen süre,
              tıklamalar ve benzeri etkileşimleri istatistiksel olarak
              değerlendirebilir.
            </p>

            <p className="mt-3">
              Kullanılan hizmetlere göre teknik veriler ilgili hizmet
              sağlayıcılarının sistemlerine aktarılabilir. Bu araçların
              kullanımı, ilgili mevzuat ve kullanıcı çerez tercihleri
              doğrultusunda gerçekleştirilir.
            </p>
          </div>

          {/* 7 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
              7. Google Analytics ve Reklam Hizmetleri
            </h2>

            <p>
              Web sitesinin ziyaretçi trafiğini ve reklam çalışmalarının
              performansını değerlendirmek amacıyla Google tarafından sunulan
              analiz veya reklam teknolojilerinden yararlanılması mümkündür.
            </p>

            <p className="mt-3">
              Bu hizmetler kapsamında tarayıcı, cihaz, ziyaret edilen sayfa
              ve benzeri teknik kullanım bilgileri işlenebilir.
            </p>

            <p className="mt-3">
              Analitik veya reklam amacıyla kullanılan isteğe bağlı
              teknolojiler, gerekli olduğu durumlarda kullanıcı tercihi
              doğrultusunda etkinleştirilir.
            </p>
          </div>

          {/* 8 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
              8. Microsoft Clarity ve Benzeri Araçlar
            </h2>

            <p>
              Kullanıcıların web sitesindeki deneyimini daha iyi anlamak ve
              sayfaların kullanılabilirliğini geliştirmek amacıyla oturum
              analizi ve ısı haritası gibi teknolojiler kullanılabilir.
            </p>

            <p className="mt-3">
              Bu kapsamda kaydırma hareketleri, tıklamalar ve sayfa
              etkileşimleri gibi kullanım davranışları analiz edilebilir.
            </p>

            <p className="mt-3">
              Bu tür araçların kullanımında ilgili hizmet sağlayıcının
              sunduğu gizlilik ve veri koruma mekanizmaları ile yürürlükteki
              mevzuat dikkate alınır.
            </p>
          </div>

          {/* 9 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
              9. Çerez Tercihlerinizi Nasıl Yönetebilirsiniz?
            </h2>

            <p>
              Çerezlerin cihazınızda kullanılmasına ilişkin tercihlerinizi
              tarayıcı ayarlarınız üzerinden değiştirebilirsiniz.
            </p>

            <p className="mt-3">
              Bunun yanında, internet sitesinde çerez tercih paneli
              bulunması halinde isteğe bağlı çerezleri bu panel üzerinden
              kabul edebilir veya reddedebilirsiniz.
            </p>

            <p className="mt-3">
              Zorunlu çerezlerin devre dışı bırakılması, internet sitesinin
              bazı temel fonksiyonlarının kullanılamamasına veya beklenen
              şekilde çalışmamasına neden olabilir.
            </p>
          </div>

          {/* 10 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
              10. Üçüncü Taraf Hizmetler
            </h2>

            <p>
              Web sitemizin çalışması, güvenliği, iletişim süreçleri,
              analizleri veya reklam ölçümlemeleri için dış hizmet
              sağlayıcılarının altyapılarından yararlanılabilir.
            </p>

            <p className="mt-3">
              Bu kapsamda kullanılan teknoloji sağlayıcıları; barındırma,
              güvenlik, içerik dağıtımı, e-posta iletimi, analiz, reklam veya
              kullanıcı deneyimi hizmetleri sunabilir.
            </p>

            <p className="mt-3">
              Üçüncü taraf hizmetlerinin kendi gizlilik politikaları ve
              kullanım koşulları bulunabilir. Bu hizmetlerin kullanıldığı
              durumlarda ilgili sağlayıcının veri işleme uygulamaları da
              dikkate alınır.
            </p>
          </div>

          {/* 11 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
              11. Verilerin Güvenliği
            </h2>

            <p>
              Tarafımıza iletilen bilgilerin yetkisiz erişim, kayıp,
              değiştirilme veya kötüye kullanım risklerine karşı korunması
              için makul teknik ve idari güvenlik tedbirleri uygulanır.
            </p>

            <p className="mt-3">
              Bununla birlikte internet üzerinden gerçekleştirilen hiçbir
              veri aktarımının tamamen risksiz olduğu garanti edilemez.
              Kullanıcıların da cihazlarını, tarayıcılarını ve bağlantı
              güvenliklerini güncel tutmaları önemlidir.
            </p>
          </div>

          {/* 12 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
              12. Kişisel Verilerin Saklanması
            </h2>

            <p>
              Kişisel bilgiler, toplandıkları amacın gerektirdiği süre
              boyunca veya ilgili mevzuatın zorunlu kıldığı süre kadar
              saklanabilir.
            </p>

            <p className="mt-3">
              Saklama süresinin sona ermesi veya verinin işlenmesini
              gerektiren hukuki nedenin ortadan kalkması halinde ilgili
              bilgiler, uygulanabilir mevzuata uygun şekilde silinir, yok
              edilir veya anonim hale getirilir.
            </p>
          </div>

          {/* 13 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
              13. Yurt Dışına Veri Aktarımı
            </h2>

            <p>
              Web sitesinde kullanılan bazı teknoloji ve altyapı
              sağlayıcılarının sistemleri Türkiye dışında bulunabilir.
              Böyle bir hizmetin kullanılması halinde teknik verilerin veya
              ilgili kişisel verilerin yurt dışındaki sistemlere aktarılması
              söz konusu olabilir.
            </p>

            <p className="mt-3">
              Bu tür aktarımlar, KVKK'nın yurt dışına veri aktarımına ilişkin
              yürürlükteki hükümleri ve gerekli hukuki şartlar dikkate
              alınarak gerçekleştirilir.
            </p>
          </div>

          {/* 14 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
              14. Çocukların Gizliliği
            </h2>

            <p>
              Web sitemiz, özellikle çocuklara yönelik bir hizmet olarak
              tasarlanmamıştır. Çocuklara ait kişisel bilgilerin ebeveyn veya
              yasal temsilcilerinin bilgisi ve gerekli olduğu durumlarda
              onayı olmaksızın tarafımıza gönderilmemesini rica ederiz.
            </p>
          </div>

          {/* 15 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
              15. Diğer İnternet Sitelerine Verilen Bağlantılar
            </h2>

            <p>
              Web sitemizde üçüncü taraf internet sitelerine veya hizmetlere
              yönlendiren bağlantılar bulunabilir.
            </p>

            <p className="mt-3">
              Bu bağlantıların bulunduğu sitelerin içerikleri, güvenlik
              uygulamaları veya gizlilik politikaları İstanbul Kombi
              Teknik'in kontrolünde değildir. Harici bir siteyi ziyaret
              ettiğinizde ilgili sitenin kendi gizlilik koşullarını
              incelemeniz önerilir.
            </p>
          </div>

          {/* 16 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
              16. KVKK Kapsamındaki Haklarınız
            </h2>

            <p>
              Kişisel verilerinizin işlenmesine ilişkin haklarınız ve
              başvuru yöntemleri hakkında ayrıntılı bilgiye KVKK Aydınlatma
              Metnimiz üzerinden ulaşabilirsiniz.
            </p>

            <Link
              href="/kvkk-aydinlatma-metni"
              className="inline-flex mt-5 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-3 rounded-xl transition-colors"
            >
              KVKK Aydınlatma Metnini İncele
            </Link>
          </div>

          {/* 17 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
              17. Politika Değişiklikleri
            </h2>

            <p>
              Web sitemizde kullanılan teknolojilerin, hizmetlerin veya
              yürürlükteki mevzuatın değişmesi halinde bu Gizlilik ve Çerez
              Politikası güncellenebilir.
            </p>

            <p className="mt-3">
              Yapılan değişiklikler bu sayfada yayımlanır ve sayfanın üst
              kısmında bulunan güncelleme tarihi değiştirilerek güncel
              versiyon belirtilir.
            </p>
          </div>

          {/* 18 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
              18. İletişim
            </h2>

            <p>
              Gizlilik, çerez kullanımı veya kişisel verilerinizle ilgili
              sorularınız için aşağıdaki iletişim kanallarından bize
              ulaşabilirsiniz.
            </p>

            <div className="mt-5 bg-orange-50 border border-orange-100 rounded-xl p-5 text-slate-800 space-y-2">

              <p>
                <strong>İşletme:</strong> İstanbul Kombi Teknik
              </p>

              <p>
                <strong>E-posta:</strong>{' '}
                info@istanbulkombiteknik.com.tr
              </p>

              <p>
                <strong>Telefon:</strong> 0 (536) 749 93 49
              </p>

              <p>
                <strong>Adres:</strong> Meclis, Semih Sancar Cd. No:15,
                34785 Sancaktepe/İstanbul
              </p>

            </div>
          </div>

          {/* LAST UPDATE */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">

            <h3 className="font-bold text-slate-900 mb-2">
              Son Güncelleme
            </h3>

            <p className="text-slate-600">
              Bu Gizlilik ve Çerez Politikası 9 Eylül 2026 tarihinde
              güncellenmiştir.
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
