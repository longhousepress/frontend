export const locales = ['en', 'bg', 'kr'] as const;
export type Locale = typeof locales[number];
export const defaultLocale: Locale = 'en';

export const translations = {
  // nav
  nav_books:              { en: 'Books',              bg: 'Книги', kr: '' },
  nav_submissions:        { en: 'Submissions',        bg: 'Издаване', kr: '' },
  nav_about:              { en: 'About',              bg: 'За нас', kr: '' },
  // footer
  footer_privacy:         { en: 'privacy policy',    bg: 'поверителност', kr: '' },
  footer_contact:         { en: 'contact',            bg: 'контакт', kr: '' },
  footer_source:          { en: 'source code',        bg: 'код', kr: '' },
  // home
  home_hero_headline_1:   { en: 'Digital books',      bg: 'Е-книги', kr: '' },
  home_hero_headline_2:   { en: 'done right',         bg: 'за съвременни читатели', kr: '' },
  home_hero_subtitle:     { en: 'Timeless classics and contemporary works in carefully crafted digital editions you actually own.', bg: 'Вечни класики и оригинални, съвременни творби във внимателно изработени дигитални издания.', kr: '' },
  home_cta_browse:        { en: 'Browse books',       bg: 'Каталог', kr: '' },
  home_cta_learn:         { en: 'Learn more',         bg: 'Научи повече', kr: '' },
  home_trust_drm:         { en: '100% DRM-Free',      bg: 'Без DRM', kr: '' },
  home_trust_curated:     { en: 'Curated Selection',  bg: 'Подбрани заглавия', kr: '' },
  home_trust_standards:   { en: 'Modern Standards',   bg: 'Съвременни стандарти', kr: '' },
  home_why_label:         { en: 'Why',                bg: 'Защо', kr: '' },
  home_why_title:         { en: 'Digital books, done right', bg: 'Дигитални книги за съвременни читатели', kr: '' },
  home_feature1_title:    { en: 'Thoughtfully curated', bg: 'Подбрани заглавия', kr: '' },
  home_feature1_body:     { en: 'Our catalog blends battle-worn classics alongside exceptional contemporary writing. We only publish what we would like to read ourselves.', bg: 'Каталогът ни съчетава вечни класики с изключителна съвременна литература. Издаваме само това, което сами бихме искали да четем.', kr: '' },
  home_feature2_title:    { en: 'Truly yours',        bg: 'Свободни издания', kr: '' },
  home_feature2_body:     { en: "Our eBooks come with zero DRM: every edition you buy is yours to own, read, modify, delete, and share with friends. We treat our customers with respect, not suspicion.", bg: 'Всяко издание закупено от нас може да бъде четено, редактирано, променяно, и споделяно свободно с приятели. Отнасяме се към клиентите си с уважение, а не с подозрение.', kr: '' },
  home_feature3_title:    { en: 'Digital first',      bg: 'Последни стандарти', kr: '' },
  home_feature3_body:     { en: "We use modern eBook standards to deliver a thoughtfully designed reading experience that makes full use of your device's capabilities.", bg: 'Използваме най-съвременните технологии в продукцията на електронни книги за да осигурим приятно четене на всички устройства.', kr: '' },
  home_cta_start:         { en: 'Start reading',      bg: 'Каталог', kr: '' },
  home_hero_figcaption:   { en: 'rendered across devices', bg: 'на различни устройства', kr: '' },
  // about
  about_title:            { en: 'Frequently Asked Questions', bg: 'Често задавани въпроси', kr: '' },
  about_q1:               { en: 'What files do I get?', bg: 'Какви файлове ще получа?', kr: '' },
  about_a1:               { en: 'Every eBook comes with multiple file formats: .epub, .kepub, .azw3, .mobi, and .pdf. This ensures that you are able to read it on any device.', bg: 'Всяко издание съдържа следните формати: .epub, .kepub, .azw3, .mobi, и .pdf, ', kr: '' },
  about_q2:               { en: 'How will I receive my purchase?', bg: 'Как ще получа поръчката си?', kr: '' },
  about_a2:               { en: "All files will be sent to the email you specified when making an order. You'll receive download links immediately after payment is confirmed.", bg: 'Всички файлове ще бъдат изпратени на email адреса, който сте попълнили при поръчката.', kr: '' },
  about_q3:               { en: 'Are your eBooks DRM-free?', bg: 'Използвате ли DRM и други защити?', kr: '' },
  about_a3:               { en: 'Yes! All our eBooks come with zero DRM. Every edition you buy is yours to own, read, modify, and share. We treat our customers with respect, not suspicion.', bg: 'Не! Всички издания на Longhouse са напълно свободни. Отнасяме се към клиентите си с уважение, а не с подозрение.', kr: '' },
  about_q4:               { en: 'How do I contact', bg: 'Как да се свържа с', kr: '' },
  about_a4_pre:           { en: 'Email', bg: 'Изпратете email на', kr: '' },
  about_a4_post:          { en: 'We are very responsive and happy to help with any questions or issues.', bg: 'Ще се опитаме да отговорим във възможно най-кратък срок.', kr: '' },
  // catalog
  catalog_title:          { en: 'Catalog',            bg: 'Каталог', kr: '' },
  catalog_filter_genre:   { en: 'Genre',              bg: 'Жанр', kr: '' },
  catalog_filter_type:    { en: 'Type',               bg: 'Тип', kr: '' },
  catalog_filter_original:{ en: 'Longhouse original', bg: 'Longhouse автор', kr: '' },
  catalog_filter_classic: { en: 'Classic',            bg: 'Класика', kr: '' },
  catalog_search_placeholder: { en: 'Search books...', bg: 'Търси книги...', kr: '' },
  catalog_search_label:   { en: 'Search',             bg: 'Търси', kr: '' },
  catalog_no_results:     { en: 'No books found matching your search.', bg: 'Не бяха намерени книги.', kr: '' },
  // checkout
  checkout_title:         { en: 'Shopping Cart',      bg: 'Кошница', kr: '' },
  checkout_header:        { en: 'Shopping cart',      bg: 'Кошница', kr: '' },
  checkout_loading:       { en: 'Loading your cart...', bg: 'Зареждане на кошница...', kr: '' },
  checkout_no_cover:      { en: 'No Cover',           bg: 'Липсваща корица', kr: '' },
  checkout_remove:        { en: 'Remove',             bg: 'Премахни', kr: '' },
  checkout_empty:         { en: 'Your cart is empty.', bg: 'Кошницата е празна.', kr: '' },
  checkout_browse:        { en: 'Browse books',       bg: 'Разгледай каталога.', kr: '' },
  checkout_subtotal:      { en: 'Subtotal',           bg: 'Общо', kr: '' },
  checkout_shipping:      { en: 'Shipping and taxes calculated at checkout.', bg: 'Допълнителни такси се изчисляват при плащане.', kr: '' },
  checkout_email_label:   { en: 'Email address',      bg: 'Email адрес', kr: '' },
  checkout_email_hint:    { en: 'We will deliver your eBooks to this email address, please verify that you have access to it.', bg: 'Ще получите файловете на този email адрес.', kr: '' },
  checkout_email_placeholder: { en: 'mail@site.com', bg: '', kr: '' },
  checkout_email_invalid: { en: 'Enter valid email address', bg: 'Въведете валиден email адрес', kr: '' },
  checkout_btn:           { en: 'Checkout',           bg: 'Купи', kr: '' },
  checkout_or:            { en: 'or',                 bg: 'или', kr: '' },
  checkout_continue:      { en: 'Continue Shopping →', bg: 'Разгледай каталога →', kr: '' },
  // success
  success_title:          { en: 'Order Complete',     bg: 'Поръчката е финализирана', kr: '' },
  success_header:         { en: 'Thank you for your order!', bg: 'Благодарим Ви за поръчката!', kr: '' },
  success_loading:        { en: 'Verifying your payment...', bg: 'Потвърждаваме заплащането...', kr: '' },
  success_no_cover:       { en: 'No Cover',           bg: 'Липсваща корица', kr: '' },
  success_show_more:      { en: 'Show more formats',  bg: 'Още формати', kr: '' },
  success_show_fewer:     { en: 'Show fewer formats', bg: 'Скрий', kr: '' },
  success_files_sent:     { en: 'Your files have also been sent to', bg: 'Файловете Ви са изпратени на', kr: '' },
  success_contact:        { en: 'If you have any issues, please contact us with your order reference', bg: 'Ако имате проблеми с поръчката, свържете се с нас относно поръчка №', kr: '' },
  success_at:             { en: 'at',                 bg: 'на', kr: '' },
  // failure
  failure_title:          { en: 'Payment Failed',     bg: 'Неуспешно плащане', kr: '' },
  failure_header:         { en: 'Payment Failed',     bg: 'Неуспешно плащане', kr: '' },
  failure_body:           { en: 'Your payment could not be processed. This could be due to insufficient funds, an incorrect card number, or your payment was declined by your bank.', bg: 'Не успяхме да потвърдим заплащането Ви. Най-честите причини за това са грешен номер на картата или отказ за плащана от страна на банката Ви.', kr: '' },
  failure_subtext:        { en: 'Your cart items have been preserved. You can try again or contact us if you continue to experience issues.', bg: 'Кошницата Ви беше запазена. Може да отново да опитате заплащане. Ако смятате, че можем да помогнем, свържете се с нас.', kr: '' },
  failure_try_again:      { en: 'Try Again',          bg: 'Опитай отново', kr: '' },
  failure_continue:       { en: 'Continue Shopping',  bg: 'Към каталога', kr: '' },
  failure_help:           { en: 'Need help? Contact us at', bg: 'Помощ? Свържете се с нас на', kr: '' },
  // book detail — static labels
  book_format_label:      { en: 'Format',             bg: 'Формат', kr: '' },
  book_language_label:    { en: 'Language',           bg: 'Език', kr: '' },
  book_price_unavailable: { en: 'Price not available', bg: 'Липсваща цена', kr: '' },
  book_add_to_cart:       { en: 'Add to cart',        bg: 'Добави', kr: '' },
  book_not_available:     { en: 'Not available in GBP', bg: '', kr: '' },
  book_buy_now:           { en: 'Buy now',            bg: 'Купи', kr: '' },
  book_read_sample:       { en: 'Read a sample',      bg: 'Прочети извадка', kr: '' },
  book_read_more:         { en: '… Read more',        bg: '… още', kr: '' },
  book_read_less:         { en: '… Read less',        bg: '… скрий', kr: '' },
  book_categories:        { en: 'Categories',         bg: 'Категории', kr: '' },
  book_successfully_added:{ en: 'Successfully added', bg: 'Добавена', kr: '' },
  book_sample_page:       { en: 'Page',               bg: 'Страница', kr: '' },
  book_sample_of:         { en: 'of',                 bg: 'от', kr: '' },
  book_sample:            { en: 'Sample',             bg: 'Извадка', kr: '' },
  book_original_ribbon:   { en: 'Longhouse original', bg: 'Longhouse автор', kr: '' },
  // book detail — metadata labels
  book_meta_cover:        { en: 'Cover',              bg: 'Корица', kr: '' },
  book_meta_pages:        { en: 'Pages',              bg: 'Страници', kr: '' },
  book_meta_language:     { en: 'Language',           bg: 'Език', kr: '' },
  book_meta_translator:   { en: 'Translator',         bg: 'Преводач', kr: '' },
  book_meta_originally_published: { en: 'Originally Published', bg: 'Публикувана на', kr: '' },
  book_meta_original_language:    { en: 'Original Language',    bg: 'Език на оригинала', kr: '' },
  book_meta_this_edition: { en: 'This Edition',       bg: 'Това издание', kr: '' },
  book_meta_isbn:         { en: 'ISBN',               bg: '', kr: '' },
  // privacy
  privacy_title:          { en: 'Privacy Policy',     bg: 'Поверителност', kr: '' },
  privacy_p1:             { en: 'We collect a single piece of information: your email address. This is done so we can deliver your eBooks and assist you if you have any issues with your order.', bg: 'Longhouse събира следната лична информация: email адрес. Използваме тази информация за да доставим файловете от поръчката Ви и да предоставим асистенция при проблеми с поръчката Ви.', kr: '' },
  privacy_p2:             { en: 'We use Stripe to handle payments. They collect and handle all the information necessary to process your payment.', bg: 'Използваме Stripe за да обработим заплащанията свързани с поръчки. Stripe събира всичка лична информация която е нужна за да обработи заплащането Ви. Тази информация не се съхранява на сървирите на Longhouse.', kr: '' },
  privacy_p3_pre:         { en: 'You can request the deletion of your email address at any time and for any reason by emailing us at', bg: 'Може да поискате премахването на личната Ви информация от нашите сървъри като изпратите email на', kr: '' },
  // submissions
  submissions_title:      { en: 'Submissions',        bg: 'Издаване', kr: '' },
  submissions_intro:      { en: 'We publish poetry collections and short fiction anthologies as DRM-free ebooks. Submissions are always open.', bg: 'Longhouse Press издава стихосбирки, сборници от разкази, и други кратки форми на художествена литература.', kr: '' },
  submissions_looking_h2: { en: "What we're looking for", bg: 'Какво търсим', kr: '' },
  submissions_poetry_h3:  { en: 'Poetry',             bg: 'Поезия', kr: '' },
  submissions_poetry_body:{ en: 'Manuscripts of 40 or more poems. Traditional forms are preferred, but excellent free verse is also welcome.', bg: 'Завършени или полу-завършени стихосбирки съдържащи 40 или повече стихотворения. С приоритет са традиционни поетични форми в мерена реч, но приемаме и отлична поезия в свободен стих.', kr: '' },
  submissions_fiction_h3: { en: 'Short Fiction',      bg: 'Разкази', kr: '' },
  submissions_fiction_body: { en: 'Collections of 5 or more stories and at least 20,000 words total. Any genre is welcome, but sci-fi short fiction is a particular focus for us.', bg: 'Сборници от разкази с поне 5 завършени разказа или над 20,000 думи. Всички жанрове са добре дошли, като научно-фантастични разкази ще получат приоритет.', kr: '' },
  submissions_who_h2:     { en: 'Who should submit',  bg: 'Кой може да изпраща', kr: '' },
  submissions_who_body:   { en: 'We always prefer to hear from writers directly, but agent submissions are also accepted.', bg: 'Издателството ни е еднакво отворено към автори, които имат предишни публикации, и към нови автори.', kr: '' },
  submissions_prev_h2:    { en: 'Previously published work', bg: 'Издадени творби', kr: '' },
  submissions_prev_body:  { en: 'Totally fine, as long as you have retained the rights to your work.', bg: 'Можем да издадем творби, които са вече издадени или публикувани в онлайн канали, стига авторът да е запазил авторското право над тях.', kr: '' },
  submissions_simul_h2:   { en: 'Simultaneous submissions', bg: 'Паралелни публикации', kr: '' },
  submissions_simul_body: { en: 'Totally fine, just let us know if your manuscript is taken elsewhere.', bg: 'Приемаме заявки за публикации, които са изпратени и на други издатели. Уведомете ни ако творбата Ви е публикувана преди да получите отговор от нас.', kr: '' },
  submissions_response_h2:{ en: 'Response time',      bg: 'Времетраене', kr: '' },
  submissions_response_body: { en: 'Two weeks.',      bg: 'Полагаме усилия да се свържем с авторите в период не по-дълъг от 2 седмици.', kr: '' },
  submissions_ai_h2:      { en: 'On AI',              bg: 'За изкуствен интелект', kr: '' },
  submissions_ai_body:    { en: 'We judge submissions on literary merit alone, not on the identity of the author. Most AI submissions fall very short of the literary standards required, and will be rejected on that basis; but if you have found a way to incorporate AI into your writing process to produce worthwhile art, we are interested.', bg: 'Творбите, които изпратите ще бъдат съдени единствено спрямо литературната им стойност.', kr: '' },
  submissions_questions:  { en: 'Questions before submitting? Email us at', bg: 'Въпроси? Изпратете ни email на', kr: '' },
  submissions_form_name:  { en: 'Submitter (real or pen name)', bg: 'Име или псевдоним', kr: '' },
  submissions_form_name_placeholder: { en: 'Your name', bg: 'Име', kr: '' },
  submissions_form_type:  { en: 'Submission type',    bg: 'Жанр', kr: '' },
  submissions_form_type_placeholder: { en: 'Select a type', bg: 'Избери жанр', kr: '' },
  submissions_form_type_poetry:  { en: 'Poetry',      bg: 'Поезия', kr: '' },
  submissions_form_type_fiction: { en: 'Short Fiction', bg: 'Разкази', kr: '' },
  submissions_form_message: { en: 'Optional message', bg: 'Съобщение', kr: '' },
  submissions_form_message_placeholder: { en: "Any additional information you'd like to share…", bg: 'Допълнителна информация за творбата която изпращате', kr: '' },
  submissions_form_file:  { en: 'File upload',        bg: 'Файл', kr: '' },
  submissions_form_file_hint: { en: 'Accepted formats: PDF, DOC, DOCX, TXT, MD', bg: 'Приемаме следните файлови формати: PDF, DOC, DOCX, TXT, MD', kr: '' },
  submissions_form_submit:{ en: 'Submit',             bg: 'Изпрати', kr: '' },
  // submissions result pages
  submissions_success_title:  { en: 'Submission Received', bg: 'Заявката ви е получена', kr: '' },
  submissions_success_header: { en: 'Thank you for your submission!', bg: 'Благодарим ви за връзката', kr: '' },
  submissions_success_body:   { en: "We've received your submission and will review it shortly.", bg: 'Получихме заявката ви и ще се свържем с Вас скоро.', kr: '' },
  submissions_success_btn:    { en: 'Browse Books',   bg: 'Каталог', kr: '' },
  submissions_error_title:    { en: 'Submission Error', bg: 'Грешка при изпращането', kr: '' },
  submissions_error_header:   { en: 'Submission Error', bg: 'Грешка при изпращането', kr: '' },
  submissions_error_btn:      { en: 'Try Again',      bg: 'Опитай отново', kr: '' },
} as const;

export type TranslationKey = keyof typeof translations;

export function useTranslations(locale: string | undefined) {
  const lang = (locale && locales.includes(locale as Locale)) ? locale as Locale : defaultLocale;
  return function t(key: TranslationKey): string {
    const val = translations[key][lang];
    return val || translations[key][defaultLocale];
  };
}

export function getLocalePath(locale: string | undefined, path: string): string {
  if (!locale || locale === defaultLocale) return path;
  return `/${locale}${path}`;
}
