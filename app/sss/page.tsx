import React from 'react';
import Link from 'next/link';
import {
  Menu,
  ThermometerSun,
  PhoneCall,
  ChevronDown,
  HelpCircle,
} from 'lucide-react';

export default function SSSPage() {
  const faqs = [
    {
      question: 'Kombim sıcak su vermiyor, ne yapmalıyım?',
      answer:
        'Öncelikle kombinizin çalışır durumda olduğunu, gaz vanasının açık olduğunu ve su basıncının genellikle 1–2 bar aralığında bulunduğunu kontrol edin. Cihazda bir hata kodu varsa kullanım kılavuzundaki açıklamaya bakabilirsiniz. Sorun devam ediyorsa akış sensörü, üç yollu vana, eşanjör veya başka bir parçada arıza olabilir. Güvenliğiniz için cihazın içini kendiniz açmadan teknik servis desteği almanız önerilir.',
    },
    {
      question: 'Kombim çalışıyor ama petekleri ısıtmıyor, sebebi nedir?',
      answer:
        'Kombinin ısıtma konumunda olup olmadığını ve kalorifer sıcaklığının uygun seviyede ayarlanıp ayarlanmadığını kontrol edin. Petek vanalarının kapalı olması, tesisatta hava bulunması, pompa problemi, üç yollu vana arızası veya tesisat içerisindeki dolaşım sorunları da peteklerin ısınmamasına neden olabilir.',
    },
    {
      question: 'Peteklerin altı soğuk, üstü sıcak oluyor. Neden?',
      answer:
        'Peteklerin alt kısmının belirgin şekilde soğuk kalması, tesisatta zamanla oluşan tortu, çamur ve kir birikimiyle ilişkili olabilir. Ancak vana ayarı, tesisat dolaşımı ve petek içerisindeki su akışı da kontrol edilmelidir. Gerekli görülürse makine ve uygun temizlik kimyasalları kullanılarak tesisat temizliği yapılabilir.',
    },
    {
      question: 'Peteklerin üstü soğuk, altı sıcak oluyor. Sebebi nedir?',
      answer:
        'Peteklerin üst kısmının soğuk kalması çoğunlukla petek içerisinde hava bulunmasıyla ilişkilidir. Peteklerin havası uygun şekilde alınmalıdır. Hava alma işleminden sonra kombinin su basıncı da tekrar kontrol edilmelidir.',
    },
    {
      question: 'Kombi su basıncı kaç bar olmalıdır?',
      answer:
        'Kombi su basıncı cihazdan cihaza değişebilmekle birlikte birçok konut tipi kombide soğukken yaklaşık 1–1,5 bar aralığı normal kabul edilir. Kesin değer için kombinizin üretici kullanım kılavuzuna bakılmalıdır. Basınç sürekli düşüyor veya yükseliyorsa tesisat, genleşme tankı, emniyet ventili ya da başka bir bileşende sorun olabilir.',
    },
    {
      question: 'Kombinin su basıncı sürekli düşüyor, neden?',
      answer:
        'Basıncın sürekli düşmesi tesisatta su kaçağı, radyatör bağlantılarında kaçak, emniyet ventili problemi, genleşme tankı sorunu veya kombinin başka bir bileşenindeki arızadan kaynaklanabilir. Basıncı sürekli su ekleyerek düzeltmek yerine sorunun kaynağının tespit edilmesi gerekir.',
    },
    {
      question: 'Kombinin su basıncı neden yükseliyor?',
      answer:
        'Kombi çalışırken basıncın bir miktar yükselmesi normal olabilir. Ancak basınç aşırı yükseliyor veya cihaz soğuduğunda normal seviyeye dönmüyorsa genleşme tankı, doldurma vanası veya tesisatla ilgili bir problem söz konusu olabilir. Teknik kontrol gerekebilir.',
    },
    {
      question: 'Kombi neden sürekli çalışıyor?',
      answer:
        'Kombinin uzun süre çalışması her zaman arıza anlamına gelmez. Dış hava sıcaklığı, oda sıcaklığı, tesisat büyüklüğü, yalıtım ve seçilen kalorifer sıcaklığı çalışma süresini etkiler. Buna rağmen cihaz hiç durmadan çalışıyor ve ortam yeterince ısınmıyorsa tesisat, sensör, pompa veya cihaz ayarlarının kontrol edilmesi gerekir.',
    },
    {
      question: 'Kombi neden sık sık devreye girip çıkıyor?',
      answer:
        'Kombinin kısa aralıklarla devreye girip çıkması; düşük tesisat suyu dolaşımı, yanlış sıcaklık ayarı, sensör problemi, tesisatın yapısı veya cihaz kapasitesinin mevcut sisteme göre fazla olması gibi çeşitli nedenlerden kaynaklanabilir. Kesin teşhis için cihazın çalışma değerlerinin kontrol edilmesi gerekir.',
    },
    {
      question: 'Kombiden su damlıyor, ne yapmalıyım?',
      answer:
        'Kombiden su gelmesi önemsenmesi gereken bir durumdur. Su; bağlantı noktalarından, emniyet ventilinden, eşanjörden, pompadan veya başka bir parçadan kaynaklanabilir. Cihazın altından su geliyorsa elektrik ve gaz güvenliği açısından gerekli önlemleri alarak teknik servis çağırmanız önerilir.',
    },
    {
      question: 'Kombim sesli çalışıyor, nedeni nedir?',
      answer:
        'Uğultu, tıkırtı, sürtünme veya kaynama benzeri seslerin farklı nedenleri olabilir. Tesisatta hava, düşük su dolaşımı, pompa problemi, fan arızası, eşanjörde kirlenme veya kireçlenme bunlardan bazılarıdır. Sesin türü ve ne zaman ortaya çıktığı arızanın tespitinde önemlidir.',
    },
    {
      question: 'Kombiden uğultu sesi geliyor. Ne yapmalıyım?',
      answer:
        'Uğultu sesi pompa, fan, tesisat dolaşımı veya cihazın bazı mekanik parçalarıyla ilgili olabilir. Ses yeni başladıysa veya giderek artıyorsa cihazın zorlanmasını önlemek için teknik kontrol yaptırmak doğru olacaktır.',
    },
    {
      question: 'Kombiden tık tık ses gelmesi normal mi?',
      answer:
        'Çalışma sırasında bazı genleşme ve metal hareketlerinden hafif sesler gelebilir. Ancak sürekli ve yüksek seviyede tıklama sesi varsa fan, pompa, ateşleme sistemi veya tesisatla ilgili bir problem olabilir. Sesin kaynağının servis tarafından kontrol edilmesi gerekir.',
    },
    {
      question: 'Kombi neden ateşleme yapmıyor?',
      answer:
        'Gaz beslemesi, ateşleme elektrodu, iyonizasyon sistemi, gaz valfi, elektronik kart veya baca sistemiyle ilgili sorunlar ateşleme problemlerine neden olabilir. Gaz vanasının açık olduğunu ve cihazın hata kodu gösterip göstermediğini kontrol edebilirsiniz. Sorun devam ederse cihazı açmadan servis desteği alın.',
    },
    {
      question: 'Kombi neden sürekli hata kodu veriyor?',
      answer:
        'Hata kodları modele göre farklı anlamlara gelir. Düşük su basıncı, ateşleme problemi, aşırı ısınma, sensör arızası, fan veya baca problemi gibi birçok farklı neden hata koduna yol açabilir. Aynı hata kodu resetleme sonrasında tekrar ortaya çıkıyorsa sorunun kaynağı araştırılmalıdır.',
    },
    {
      question: 'Kombi resetleme işlemi nasıl yapılır?',
      answer:
        'Resetleme yöntemi kombinin marka ve modeline göre değişir. Genellikle cihaz üzerinde bulunan reset düğmesine birkaç saniye basılmasıyla yapılır. Reset işlemini art arda sürekli tekrarlamak doğru değildir. Hata tekrar ediyorsa teknik servis tarafından kontrol edilmesi gerekir.',
    },
    {
      question: 'Kombi bakımı ne zaman yapılmalıdır?',
      answer:
        'Kombi bakımının düzenli olarak, özellikle ısıtma sezonu başlamadan önce yaptırılması faydalıdır. Bakım sırasında cihazın genel çalışma durumu, yanma sistemi, bağlantıları, filtreleri ve uygun olan diğer bileşenleri kontrol edilir. Üreticinin bakım aralıkları ayrıca dikkate alınmalıdır.',
    },
    {
      question: 'Kombi bakımı yapılmazsa ne olur?',
      answer:
        'Düzenli bakımın ihmal edilmesi cihazın verimli çalışmasını olumsuz etkileyebilir ve bazı problemlerin fark edilmeden büyümesine neden olabilir. Yakıt tüketiminin artması, performans düşmesi, çalışma seslerinin artması veya beklenmeyen arızalarla karşılaşma ihtimali oluşabilir.',
    },
    {
      question: 'Kombi bakımı doğalgaz faturasını düşürür mü?',
      answer:
        'Düzenli bakım, kombinin ve tesisatın daha sağlıklı çalışmasına yardımcı olabilir. Ancak doğalgaz tüketimi yalnızca bakıma bağlı değildir; bina yalıtımı, dış hava sıcaklığı, kullanım alışkanlıkları, oda sıcaklığı ve tesisatın durumu da tüketimi etkiler. Bu nedenle belirli bir yüzdeyle tasarruf garantisi vermek doğru değildir.',
    },
    {
      question: 'Makineli petek temizliği gerçekten gerekli mi?',
      answer:
        'Tesisat içerisinde tortu ve kir birikimi varsa su dolaşımı ve ısı transferi olumsuz etkilenebilir. Peteklerin bazı bölümlerinin yeterince ısınmaması, ısı dağılımının dengesiz olması veya tesisat suyunun kirli olması gibi durumlarda tesisat temizliği faydalı olabilir. Temizlik ihtiyacı sistemin durumuna göre değerlendirilmelidir.',
    },
    {
      question: 'Petek temizliği kaç yılda bir yapılmalıdır?',
      answer:
        'Her tesisat için sabit bir yıl aralığı vermek doğru değildir. Tesisatın yaşı, kullanılan su, boru yapısı, peteklerin performansı ve sistemdeki kirlilik miktarı dikkate alınmalıdır. Peteklerde belirgin ısınma problemleri veya dolaşım sorunları varsa temizlik ihtiyacı teknik olarak kontrol edilebilir.',
    },
    {
      question: 'Petek temizliği ne kadar sürer?',
      answer:
        'İşlem süresi petek sayısına, tesisatın yapısına ve kirlilik seviyesine göre değişir. Uygun ekipmanla yapılan standart bir konut tesisatının temizliği çoğu durumda aynı gün içerisinde tamamlanabilir.',
    },
    {
      question: 'Petek temizliği yapılırken kombi kapatılır mı?',
      answer:
        'Temizlik işleminin uygulanma şekline göre kombinin çalışma durumu değişebilir. İşlem öncesinde kombinin uygun şekilde kapatılması ve tesisatın hazırlanması gerekebilir. Uygulama, kullanılan makine ve temizlik yöntemine göre teknik ekip tarafından belirlenir.',
    },
    {
      question: 'Kombi filtresi neden temizlenmelidir?',
      answer:
        'Tesisat filtresinde biriken tortu ve kir, su dolaşımını olumsuz etkileyebilir. Filtrenin temiz olması pompa ve tesisat dolaşımının daha sağlıklı çalışmasına yardımcı olur. Filtre kontrolü ve temizliği bakım sırasında yapılabilecek kontrollerden biridir.',
    },
    {
      question: 'Kombi yaz moduna nasıl alınır?',
      answer:
        'Kombilerin yaz/kış modu seçimi marka ve modele göre değişir. Yaz modunda genellikle kalorifer ısıtması devre dışı kalırken sıcak su fonksiyonu kullanılmaya devam eder. Kombinizin ekranındaki sembolleri ve kullanım kılavuzunu kontrol ederek doğru modu seçebilirsiniz.',
    },
    {
      question: 'Kombi kış modunda kaç dereceye ayarlanmalıdır?',
      answer:
        'Tek bir doğru sıcaklık değeri yoktur. Evdeki yalıtım, dış hava sıcaklığı, petek boyutu ve kişisel konfor ihtiyacı dikkate alınmalıdır. Çok yüksek sıcaklıkta çalıştırmak yerine, ortamı yeterince ısıtan uygun bir ayar tercih edilmesi daha verimli olabilir.',
    },
    {
      question: 'Oda termostatı kullanmak faydalı mı?',
      answer:
        'Oda termostatı, ortam sıcaklığının daha kontrollü şekilde yönetilmesine yardımcı olabilir. Kombinin gereksiz yere çalışmasını azaltmaya ve daha dengeli bir ısıtma sağlamaya katkıda bulunabilir. Ancak termostatın doğru konumlandırılması ve kombiyle uyumlu olması önemlidir.',
    },
    {
      question: 'Kombi gece kapatılmalı mı?',
      answer:
        'Kombiyi tamamen kapatmak her ev için en doğru yöntem değildir. Özellikle soğuk havalarda binanın yalıtımı, evin kullanım durumu ve donma riski dikkate alınmalıdır. Bazı durumlarda sıcaklığı tamamen kapatmak yerine daha düşük bir seviyede tutmak daha uygun olabilir.',
    },
    {
      question: 'Kombiyi yazın tamamen kapatmak gerekir mi?',
      answer:
        'Isıtma ihtiyacı olmayan dönemlerde kombi yaz moduna alınabilir. Böylece kalorifer devresi kapalı kalırken sıcak su ihtiyacı karşılanabilir. Uzun süre ev kullanılmayacaksa cihazın kapatılmasıyla ilgili üretici tavsiyelerine uyulmalıdır.',
    },
    {
      question: 'Kombi donmaya karşı nasıl korunur?',
      answer:
        'Modern kombilerde donma koruma fonksiyonu bulunabilir. Ancak bu fonksiyonun çalışabilmesi için cihazın elektrik ve gerekli durumlarda gaz bağlantısının uygun şekilde aktif olması gerekir. Uzun süre kullanılmayan evlerde tesisatın donma riskine karşı ayrıca değerlendirme yapılmalıdır.',
    },
    {
      question: 'Kombi değişimi ne zaman düşünülmelidir?',
      answer:
        'Kombinin yaşı, tekrarlayan arızalar, yedek parça bulunabilirliği, bakım maliyetleri ve mevcut cihazın verimliliği birlikte değerlendirilmelidir. Sürekli arıza yapan ve onarım maliyeti yükselen cihazlarda yeni bir kombi seçeneği ekonomik açıdan daha uygun olabilir.',
    },
    {
      question: 'Kombi tamiri ne kadar sürer?',
      answer:
        'Arızanın türüne göre süre değişir. Basit ayar ve bakım işlemleri daha kısa sürede tamamlanabilirken, pompa, fan, eşanjör, elektronik kart veya başka bir parçanın değiştirilmesi daha uzun sürebilir. Servis ekibi cihazı gördükten sonra daha net bir süre belirleyebilir.',
    },
    {
      question: 'Kombi tamirinde parça değişimi gerekiyor mu?',
      answer:
        'Her kombi arızasında parça değişimi gerekmez. Öncelikle arızanın kaynağının doğru şekilde tespit edilmesi gerekir. Bazı sorunlar temizlik, bakım, bağlantı kontrolü veya ayar işlemleriyle giderilebilir. Parça değişimi gerekiyorsa uygun ve cihazla uyumlu parçanın kullanılması önemlidir.',
    },
    {
      question: 'Servis işlemlerinde garanti veriliyor mu?',
      answer:
        'Servis tarafından yapılan işleme ve kullanılan parçaya ilişkin garanti koşulları, servis firmasının sunduğu garanti kapsamına göre değişir. İşlem öncesinde işçilik ve parça garantisinin süresini ve kapsamını yazılı olarak öğrenmeniz önerilir.',
    },
    {
      question: 'Hangi marka kombilere servis hizmeti veriyorsunuz?',
      answer:
        'Servis hizmeti verilen marka ve modeller teknik ekibin uzmanlığına ve mevcut parça/ekipman durumuna göre değişebilir. Arıza kaydı oluştururken kombinizin marka ve modelini belirtmeniz, uygun ekip yönlendirilmesini kolaylaştırır.',
    },
    {
      question: 'Aynı gün kombi servisi gelebilir mi?',
      answer:
        'Servis yoğunluğu, konum ve arızanın durumuna göre değişmekle birlikte uygunluk olması halinde aynı gün içerisinde servis planlaması yapılabilir. Özellikle kış aylarında yoğunluk artabileceğinden önceden randevu oluşturmak faydalı olacaktır.',
    },
    {
      question: 'Hangi bölgelere kombi servisi veriyorsunuz?',
      answer:
        'Başta Sancaktepe ve Çekmeköy olmak üzere Sultanbeyli, Ümraniye ve Kadıköy bölgelerine servis hizmeti sunuyoruz. Hizmet alanı ve servis uygunluğu için arayarak bulunduğunuz mahalleyi belirtmeniz yeterlidir.',
    },
    {
      question: 'Kombi arızasında önce neyi kontrol etmeliyim?',
      answer:
        'Güvenli şekilde kontrol edebileceğiniz temel noktalar; cihazın elektrik bağlantısı, gaz vanasının açık olup olmadığı, kombi su basıncı ve cihazın hata kodu gösterip göstermediğidir. Gaz kokusu, su kaçağı veya ciddi bir arıza şüphesi varsa cihazı kurcalamadan profesyonel destek alın.',
    },
    {
      question: 'Gaz kokusu alırsam kombiye müdahale etmeli miyim?',
      answer:
        'Hayır. Gaz kokusu ciddi bir güvenlik durumudur. Elektrik düğmelerini kullanmadan ortamı güvenli şekilde havalandırın, mümkünse gaz vanasını kapatın ve bulunduğunuz bölgedeki doğal gaz acil hattı veya yetkili acil servisle iletişime geçin. Gaz kokusu varken kombiyi açıp kapatmaya veya kendiniz tamir etmeye çalışmayın.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">

      {/* HEADER */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

          <Link href="/" className="flex items-center gap-2">
            <ThermometerSun className="w-8 h-8 text-orange-500" />

            <span className="text-2xl font-black text-slate-900 tracking-tight">
              İstanbul Kombi
              <span className="text-orange-500">Teknik</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8 font-semibold text-slate-600">

            {/* HİZMETLER */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-orange-500 transition-colors py-8">
                Hizmetler
                <ChevronDown className="w-4 h-4" />
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

            {/* BÖLGELER */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-orange-500 transition-colors py-8">
                Hizmet Bölgeleri
                <ChevronDown className="w-4 h-4" />
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
              className="text-orange-500 transition-colors py-8"
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
            Kombi Sıkça Sorulan Sorular
          </h1>

          <p className="text-slate-300 text-lg max-w-3xl mx-auto">
            Kombi arızaları, peteklerin ısınmaması, kombi bakımı,
            petek temizliği, su basıncı ve doğalgaz kullanımı hakkında
            merak ettiğiniz soruların yanıtlarını burada bulabilirsiniz.
          </p>

        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <span className="text-orange-500 font-bold uppercase tracking-wider text-sm">
              Merak Ettikleriniz
            </span>

            <h2 className="text-3xl md:text-4xl font-extrabold mt-2 text-slate-900">
              Kombi ve Petekler Hakkında Sık Sorulanlar
            </h2>

            <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
              En çok karşılaşılan kombi problemleri ve bakım konuları
              hakkında pratik bilgiler.
            </p>
          </div>

          <div className="space-y-5">
            {faqs.map((faq, index) => (
              <article
                key={index}
                className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-100 hover:border-orange-200 hover:shadow-md transition-all duration-200"
              >
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 flex items-start gap-3">
                  <HelpCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />

                  <span>{faq.question}</span>
                </h3>

                <p className="text-slate-600 leading-relaxed pl-9">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Sorununuzun cevabını bulamadınız mı?
          </h3>

          <p className="text-slate-600 mb-8 max-w-xl mx-auto">
            Kombinizde yaşadığınız problemi teknik ekibimize anlatın.
            Uygun servis yönlendirmesi ve bilgi için bizimle iletişime geçebilirsiniz.
          </p>

          <a
            href="tel:+905365499349"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl"
          >
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
                İstanbul Kombi
                <span className="text-orange-500">Teknik</span>
              </span>

            </div>

            <p className="text-sm">
              İstanbul genelinde güvenilir, hızlı ve garantili kombi
              teknik servis hizmetleri.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">
              İletişim
            </h4>

            <ul className="space-y-2 text-sm">
              <li>0 (536) 549 93 49</li>
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
              Çekmeköy, Sancaktepe, Sultanbeyli,
              Ümraniye ve Kadıköy bölgelerine hizmet veriyoruz.
            </p>
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