export const locales = ['en', 'bg', 'ko'] as const;
export type Locale = typeof locales[number];
export const defaultLocale: Locale = 'en';

const localeToLanguage: Record<Locale, string> = {
  en: 'eng',
  bg: 'bul',
  ko: 'kor',
};

export function getLanguage(locale: string | undefined): string {
  if (locale && locale in localeToLanguage) {
    return localeToLanguage[locale as Locale];
  }
  return localeToLanguage[defaultLocale];
}

export type CurrencyConfig = {
  code: string;
  symbol: string;
  divisor: number; // divide raw DB amount by this to get display amount; 1 for KRW (no sub-units)
};

export const currencyConfigs: Record<string, CurrencyConfig> = {
  GBP: { code: 'GBP', symbol: '£', divisor: 100 },
  EUR: { code: 'EUR', symbol: '€', divisor: 100 },
  KRW: { code: 'KRW', symbol: '₩', divisor: 1 },
};

const localeToCurrency: Record<Locale, CurrencyConfig> = {
  en: currencyConfigs.GBP,
  bg: currencyConfigs.EUR,
  ko: currencyConfigs.KRW,
};

export function getCurrencyConfig(locale: string | undefined): CurrencyConfig {
  const lang = (locale && locales.includes(locale as Locale)) ? locale as Locale : defaultLocale;
  return localeToCurrency[lang];
}

export const translations = {
  // nav
  nav_books:              { en: 'Books',              bg: 'Книги', ko: '' },
  nav_submissions:        { en: 'Submissions',        bg: 'Издаване', ko: '' },
  nav_about:              { en: 'About',              bg: 'За нас', ko: '' },
  // footer
  footer_privacy:         { en: 'privacy policy',    bg: 'поверителност', ko: '' },
  footer_contact:         { en: 'contact',            bg: 'контакт', ko: '' },
  footer_source:          { en: 'source code',        bg: 'код', ko: '' },
  // home
  home_hero_headline_1:   { en: 'Digital books',      bg: 'Е-книги', ko: '' },
  home_hero_headline_2:   { en: 'done right',         bg: 'за съвременни читатели', ko: '' },
  home_hero_subtitle:     { en: 'Timeless classics and contemporary works in carefully crafted digital editions you actually own.', bg: 'Вечни класики и оригинални, съвременни творби във внимателно изработени дигитални издания.', ko: '' },
  home_cta_browse:        { en: 'Browse books',       bg: 'Каталог', ko: '' },
  home_cta_learn:         { en: 'Learn more',         bg: 'Научи повече', ko: '' },
  home_trust_drm:         { en: '100% DRM-Free',      bg: 'Без DRM', ko: '' },
  home_trust_curated:     { en: 'Curated Selection',  bg: 'Подбрани заглавия', ko: '' },
  home_trust_standards:   { en: 'Modern Standards',   bg: 'Съвременни стандарти', ko: '' },
  home_why_label:         { en: 'Why',                bg: 'Защо', ko: '' },
  home_why_title:         { en: 'Digital books, done right', bg: 'Дигитални книги за съвременни читатели', ko: '' },
  home_feature1_title:    { en: 'Thoughtfully curated', bg: 'Подбрани заглавия', ko: '' },
  home_feature1_body:     { en: 'Our catalog blends battle-worn classics alongside exceptional contemporary writing. We only publish what we would like to read ourselves.', bg: 'Каталогът ни съчетава вечни класики с изключителна съвременна литература. Издаваме само това, което сами бихме искали да четем.', ko: '' },
  home_feature2_title:    { en: 'Truly yours',        bg: 'Свободни издания', ko: '' },
  home_feature2_body:     { en: "Our eBooks come with zero DRM: every edition you buy is yours to own, read, modify, delete, and share with friends. We treat our customers with respect, not suspicion.", bg: 'Всяко издание закупено от нас може да бъде четено, редактирано, променяно, и споделяно свободно с приятели. Отнасяме се към клиентите си с уважение, а не с подозрение.', ko: '' },
  home_feature3_title:    { en: 'Digital first',      bg: 'Последни стандарти', ko: '' },
  home_feature3_body:     { en: "We use modern eBook standards to deliver a thoughtfully designed reading experience that makes full use of your device's capabilities.", bg: 'Използваме най-съвременните технологии в продукцията на електронни книги за да осигурим приятно четене на всички устройства.', ko: '' },
  home_cta_start:         { en: 'Start reading',      bg: 'Каталог', ko: '' },
  home_hero_figcaption:   { en: 'rendered across devices', bg: 'на различни устройства', ko: '' },
  // about
  about_title:            { en: 'Frequently Asked Questions', bg: 'Често задавани въпроси', ko: '' },
  about_q1:               { en: 'What files do I get?', bg: 'Какви файлове ще получа?', ko: '' },
  about_a1:               { en: 'Every eBook comes with multiple file formats: .epub, .kepub, .azw3, .mobi, and .pdf. This ensures that you are able to read it on any device.', bg: 'Всяко издание съдържа следните формати: .epub, .kepub, .azw3, .mobi, и .pdf, ', ko: '' },
  about_q2:               { en: 'How will I receive my purchase?', bg: 'Как ще получа поръчката си?', ko: '' },
  about_a2:               { en: "All files will be sent to the email you specified when making an order. You'll receive download links immediately after payment is confirmed.", bg: 'Всички файлове ще бъдат изпратени на email адреса, който сте попълнили при поръчката.', ko: '' },
  about_q3:               { en: 'Are your eBooks DRM-free?', bg: 'Използвате ли DRM и други защити?', ko: '' },
  about_a3:               { en: 'Yes! All our eBooks come with zero DRM. Every edition you buy is yours to own, read, modify, and share. We treat our customers with respect, not suspicion.', bg: 'Не! Всички издания на Longhouse са напълно свободни. Отнасяме се към клиентите си с уважение, а не с подозрение.', ko: '' },
  about_q4:               { en: 'How do I contact', bg: 'Как да се свържа с', ko: '' },
  about_a4_pre:           { en: 'Email', bg: 'Изпратете email на', ko: '' },
  about_a4_post:          { en: 'We are very responsive and happy to help with any questions or issues.', bg: 'Ще се опитаме да отговорим във възможно най-кратък срок.', ko: '' },
  // catalog
  catalog_title:          { en: 'Catalog',            bg: 'Каталог', ko: '' },
  catalog_filter_genre:   { en: 'Genre',              bg: 'Жанр', ko: '' },
  catalog_filter_type:    { en: 'Type',               bg: 'Тип', ko: '' },
  catalog_filter_original:{ en: 'Longhouse original', bg: 'Longhouse автор', ko: '' },
  catalog_filter_classic: { en: 'Classic',            bg: 'Класика', ko: '' },
  catalog_search_placeholder: { en: 'Search books...', bg: 'Търси книги...', ko: '' },
  catalog_search_label:   { en: 'Search',             bg: 'Търси', ko: '' },
  catalog_no_results:     { en: 'No books found matching your search.', bg: 'Не бяха намерени книги.', ko: '' },
  // checkout
  checkout_title:         { en: 'Shopping Cart',      bg: 'Кошница', ko: '' },
  checkout_header:        { en: 'Shopping cart',      bg: 'Кошница', ko: '' },
  checkout_loading:       { en: 'Loading your cart...', bg: 'Зареждане на кошница...', ko: '' },
  checkout_no_cover:      { en: 'No Cover',           bg: 'Липсваща корица', ko: '' },
  checkout_remove:        { en: 'Remove',             bg: 'Премахни', ko: '' },
  checkout_empty:         { en: 'Your cart is empty.', bg: 'Кошницата е празна.', ko: '' },
  checkout_browse:        { en: 'Browse books',       bg: 'Разгледай каталога.', ko: '' },
  checkout_subtotal:      { en: 'Subtotal',           bg: 'Общо', ko: '' },
  checkout_shipping:      { en: 'Shipping and taxes calculated at checkout.', bg: 'Допълнителни такси се изчисляват при плащане.', ko: '' },
  checkout_email_label:   { en: 'Email address',      bg: 'Email адрес', ko: '' },
  checkout_email_hint:    { en: 'We will deliver your eBooks to this email address, please verify that you have access to it.', bg: 'Ще получите файловете на този email адрес.', ko: '' },
  checkout_email_placeholder: { en: 'mail@site.com', bg: '', ko: '' },
  checkout_email_invalid: { en: 'Enter valid email address', bg: 'Въведете валиден email адрес', ko: '' },
  checkout_btn:           { en: 'Checkout',           bg: 'Купи', ko: '' },
  checkout_or:            { en: 'or',                 bg: 'или', ko: '' },
  checkout_continue:      { en: 'Continue Shopping →', bg: 'Разгледай каталога →', ko: '' },
  // success
  success_title:          { en: 'Order Complete',     bg: 'Поръчката е финализирана', ko: '' },
  success_header:         { en: 'Thank you for your order!', bg: 'Благодарим Ви за поръчката!', ko: '' },
  success_loading:        { en: 'Verifying your payment...', bg: 'Потвърждаваме заплащането...', ko: '' },
  success_no_cover:       { en: 'No Cover',           bg: 'Липсваща корица', ko: '' },
  success_show_more:      { en: 'Show more formats',  bg: 'Още формати', ko: '' },
  success_show_fewer:     { en: 'Show fewer formats', bg: 'Скрий', ko: '' },
  success_files_sent:     { en: 'Your files have also been sent to', bg: 'Файловете Ви са изпратени на', ko: '' },
  success_contact:        { en: 'If you have any issues, please contact us with your order reference', bg: 'Ако имате проблеми с поръчката, свържете се с нас относно поръчка №', ko: '' },
  success_at:             { en: 'at',                 bg: 'на', ko: '' },
  // failure
  failure_title:          { en: 'Payment Failed',     bg: 'Неуспешно плащане', ko: '' },
  failure_header:         { en: 'Payment Failed',     bg: 'Неуспешно плащане', ko: '' },
  failure_body:           { en: 'Your payment could not be processed. This could be due to insufficient funds, an incorrect card number, or your payment was declined by your bank.', bg: 'Не успяхме да потвърдим заплащането Ви. Най-честите причини за това са грешен номер на картата или отказ за плащана от страна на банката Ви.', ko: '' },
  failure_subtext:        { en: 'Your cart items have been preserved. You can try again or contact us if you continue to experience issues.', bg: 'Кошницата Ви беше запазена. Може да отново да опитате заплащане. Ако смятате, че можем да помогнем, свържете се с нас.', ko: '' },
  failure_try_again:      { en: 'Try Again',          bg: 'Опитай отново', ko: '' },
  failure_continue:       { en: 'Continue Shopping',  bg: 'Към каталога', ko: '' },
  failure_help:           { en: 'Need help? Contact us at', bg: 'Помощ? Свържете се с нас на', ko: '' },
  // book detail — static labels
  book_by:                { en: 'by',                 bg: 'от', ko: '' },
  book_cover_of:          { en: 'Cover of',           bg: 'Корица на', ko: '' },
  book_card_label:        { en: 'Book:',              bg: 'Книга:', ko: '' },
  book_card_view_details: { en: 'View details for',   bg: 'Вижте детайли за', ko: '' },
  book_format_label:      { en: 'Format',             bg: 'Формат', ko: '' },
  book_language_label:    { en: 'Language',           bg: 'Език', ko: '' },
  book_price_unavailable: { en: 'Price not available', bg: 'Липсваща цена', ko: '' },
  book_add_to_cart:       { en: 'Add to cart',        bg: 'Добави', ko: '' },
  book_not_available:     { en: 'Not available', bg: 'Не е налично', ko: '' },
  book_buy_now:           { en: 'Buy now',            bg: 'Купи', ko: '' },
  book_read_sample:       { en: 'Read a sample',      bg: 'Прочети извадка', ko: '' },
  book_read_more:         { en: '… Read more',        bg: '… още', ko: '' },
  book_read_less:         { en: '… Read less',        bg: '… скрий', ko: '' },
  book_categories:        { en: 'Categories',         bg: 'Категории', ko: '' },
  book_successfully_added:{ en: 'Successfully added', bg: 'Добавена', ko: '' },
  book_sample_page:       { en: 'Page',               bg: 'Страница', ko: '' },
  book_sample_of:         { en: 'of',                 bg: 'от', ko: '' },
  book_sample:            { en: 'Sample',             bg: 'Извадка', ko: '' },
  book_original_ribbon:   { en: 'Longhouse original', bg: 'Longhouse автор', ko: '' },
  // book detail — metadata labels
  book_meta_cover:        { en: 'Cover',              bg: 'Корица', ko: '' },
  book_meta_pages:        { en: 'Pages',              bg: 'Страници', ko: '' },
  book_meta_language:     { en: 'Language',           bg: 'Език', ko: '' },
  book_meta_translator:   { en: 'Translator',         bg: 'Преводач', ko: '' },
  book_meta_originally_published: { en: 'Originally Published', bg: 'Публикувана на', ko: '' },
  book_meta_original_language:    { en: 'Original Language',    bg: 'Език на оригинала', ko: '' },
  book_meta_this_edition: { en: 'This Edition',       bg: 'Това издание', ko: '' },
  book_meta_isbn:         { en: 'ISBN',               bg: '', ko: '' },
  // privacy
  privacy_title:          { en: 'Privacy Policy',     bg: 'Поверителност', ko: '' },
  privacy_p1:             { en: 'We collect a single piece of information: your email address. This is done so we can deliver your eBooks and assist you if you have any issues with your order.', bg: 'Longhouse събира следната лична информация: email адрес. Използваме тази информация за да доставим файловете от поръчката Ви и да предоставим асистенция при проблеми с поръчката Ви.', ko: '' },
  privacy_p2:             { en: 'We use Stripe to handle payments. They collect and handle all the information necessary to process your payment.', bg: 'Използваме Stripe за да обработим заплащанията свързани с поръчки. Stripe събира всичка лична информация която е нужна за да обработи заплащането Ви. Тази информация не се съхранява на сървирите на Longhouse.', ko: '' },
  privacy_p3_pre:         { en: 'You can request the deletion of your email address at any time and for any reason by emailing us at', bg: 'Може да поискате премахването на личната Ви информация от нашите сървъри като изпратите email на', ko: '' },
  // submissions
  submissions_title:      { en: 'Submissions',        bg: 'Издаване', ko: '' },
  submissions_intro:      { en: 'We publish poetry collections and short fiction anthologies as DRM-free ebooks. Submissions are always open.', bg: 'Longhouse Press издава стихосбирки, сборници от разкази, и други кратки форми на художествена литература.', ko: '' },
  submissions_looking_h2: { en: "What we're looking for", bg: 'Какво търсим', ko: '' },
  submissions_poetry_h3:  { en: 'Poetry',             bg: 'Поезия', ko: '' },
  submissions_poetry_body:{ en: 'Manuscripts of 40 or more poems. Traditional forms are preferred, but excellent free verse is also welcome.', bg: 'Завършени или полу-завършени стихосбирки съдържащи 40 или повече стихотворения. С приоритет са традиционни поетични форми в мерена реч, но приемаме и отлична поезия в свободен стих.', ko: '' },
  submissions_fiction_h3: { en: 'Short Fiction',      bg: 'Разкази', ko: '' },
  submissions_fiction_body: { en: 'Collections of 5 or more stories and at least 20,000 words total. Any genre is welcome, but sci-fi short fiction is a particular focus for us.', bg: 'Сборници от разкази с поне 5 завършени разказа или над 20,000 думи. Всички жанрове са добре дошли, като научно-фантастични разкази ще получат приоритет.', ko: '' },
  submissions_who_h2:     { en: 'Who should submit',  bg: 'Кой може да изпраща', ko: '' },
  submissions_who_body:   { en: 'We always prefer to hear from writers directly, but agent submissions are also accepted.', bg: 'Издателството ни е еднакво отворено към автори, които имат предишни публикации, и към нови автори.', ko: '' },
  submissions_prev_h2:    { en: 'Previously published work', bg: 'Издадени творби', ko: '' },
  submissions_prev_body:  { en: 'Totally fine, as long as you have retained the rights to your work.', bg: 'Можем да издадем творби, които са вече издадени или публикувани в онлайн канали, стига авторът да е запазил авторското право над тях.', ko: '' },
  submissions_simul_h2:   { en: 'Simultaneous submissions', bg: 'Паралелни публикации', ko: '' },
  submissions_simul_body: { en: 'Totally fine, just let us know if your manuscript is taken elsewhere.', bg: 'Приемаме заявки за публикации, които са изпратени и на други издатели. Уведомете ни ако творбата Ви е публикувана преди да получите отговор от нас.', ko: '' },
  submissions_response_h2:{ en: 'Response time',      bg: 'Времетраене', ko: '' },
  submissions_response_body: { en: 'Two weeks.',      bg: 'Полагаме усилия да се свържем с авторите в период не по-дълъг от 2 седмици.', ko: '' },
  submissions_ai_h2:      { en: 'On AI',              bg: 'За изкуствен интелект', ko: '' },
  submissions_ai_body:    { en: 'We judge submissions on literary merit alone, not on the identity of the author. Most AI submissions fall very short of the literary standards required, and will be rejected on that basis; but if you have found a way to incorporate AI into your writing process to produce worthwhile art, we are interested.', bg: 'Творбите, които изпратите ще бъдат съдени единствено спрямо литературната им стойност.', ko: '' },
  submissions_questions:  { en: 'Questions before submitting? Email us at', bg: 'Въпроси? Изпратете ни email на', ko: '' },
  submissions_form_name:  { en: 'Submitter (real or pen name)', bg: 'Име или псевдоним', ko: '' },
  submissions_form_name_placeholder: { en: 'Your name', bg: 'Име', ko: '' },
  submissions_form_type:  { en: 'Submission type',    bg: 'Жанр', ko: '' },
  submissions_form_type_placeholder: { en: 'Select a type', bg: 'Избери жанр', ko: '' },
  submissions_form_type_poetry:  { en: 'Poetry',      bg: 'Поезия', ko: '' },
  submissions_form_type_fiction: { en: 'Short Fiction', bg: 'Разкази', ko: '' },
  submissions_form_message: { en: 'Optional message', bg: 'Съобщение', ko: '' },
  submissions_form_message_placeholder: { en: "Any additional information you'd like to share…", bg: 'Допълнителна информация за творбата която изпращате', ko: '' },
  submissions_form_file:  { en: 'File upload',        bg: 'Файл', ko: '' },
  submissions_form_file_hint: { en: 'Accepted formats: PDF, DOC, DOCX, TXT, MD', bg: 'Приемаме следните файлови формати: PDF, DOC, DOCX, TXT, MD', ko: '' },
  submissions_form_submit:{ en: 'Submit',             bg: 'Изпрати', ko: '' },
  // submissions result pages
  submissions_success_title:  { en: 'Submission Received', bg: 'Заявката ви е получена', ko: '' },
  submissions_success_header: { en: 'Thank you for your submission!', bg: 'Благодарим ви за връзката', ko: '' },
  submissions_success_body:   { en: "We've received your submission and will review it shortly.", bg: 'Получихме заявката ви и ще се свържем с Вас скоро.', ko: '' },
  submissions_success_btn:    { en: 'Browse Books',   bg: 'Каталог', ko: '' },
  submissions_error_title:    { en: 'Submission Error', bg: 'Грешка при изпращането', ko: '' },
  submissions_error_header:   { en: 'Submission Error', bg: 'Грешка при изпращането', ko: '' },
  submissions_error_btn:      { en: 'Try Again',      bg: 'Опитай отново', ko: '' },
} as const;

export type TranslationKey = keyof typeof translations;

export function useTranslations(locale: string | undefined) {
  const lang = (locale && locales.includes(locale as Locale)) ? locale as Locale : defaultLocale;
  return function t(key: TranslationKey): string {
    const val = translations[key][lang];
    return val || translations[key][defaultLocale];
  };
}

