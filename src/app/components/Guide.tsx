import { useState } from "react";
import { Link, useParams } from "react-router";
import {
  AlertCircle,
  BookmarkPlus,
  Calendar,
  ChevronLeft,
  Clock,
  Eye,
  Heart,
  MessageCircle,
  Share2,
  ThumbsUp,
} from "lucide-react";
import { GUIDES } from "../mockData";
import { GUIDE_ARTICLES } from "../guideContent";
import {
  FAQSection,
  Seo,
  absoluteUrl,
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildOrganizationJsonLd,
  buildWebPageJsonLd,
} from "../seo";

export function Guide() {
  const { id } = useParams();
  const guide = GUIDES.find((item) => item.id === id);
  const [isSaved, setIsSaved] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  if (!guide) {
    return (
      <div className="w-full min-h-screen bg-slate-50 flex flex-col items-center justify-center p-8">
        <Seo
          title="Guide Not Found"
          description="This China travel guide could not be found."
          path={`/guide/${id || ""}`}
          noindex
        />
        <h1 className="text-2xl font-semibold text-slate-900 mb-4">Guide not found</h1>
        <Link to="/guides" className="text-red-600 hover:underline">
          Return to Guides
        </Link>
      </div>
    );
  }

  const article = GUIDE_ARTICLES[guide.id] ?? GUIDE_ARTICLES.g1;
  const guidePath = `/guide/${guide.id}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${absoluteUrl(guidePath)}#article`,
    mainEntityOfPage: {
      "@id": `${absoluteUrl(guidePath)}#webpage`,
    },
    headline: guide.title,
    description: article.description,
    image: guide.image,
    author: {
      "@type": "Person",
      name: guide.author.name,
      image: guide.author.avatar,
    },
    publisher: {
      "@id": absoluteUrl("/#organization"),
    },
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    articleSection: guide.tags,
    inLanguage: "en",
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-20">
      <Seo
        title={`${guide.title} - Travel Guide`}
        description={article.description}
        path={guidePath}
        image={guide.image}
        type="article"
        keywords={["China travel guide", ...guide.tags, guide.author.name]}
        jsonLd={[
          buildOrganizationJsonLd(),
          buildWebPageJsonLd({
            path: guidePath,
            name: guide.title,
            description: article.description,
            image: guide.image,
            type: "Article",
            dateModified: article.dateModified,
          }),
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Guides", path: "/guides" },
            { name: guide.title, path: guidePath },
          ]),
          jsonLd,
          buildFaqJsonLd(article.faqs),
        ]}
      />

      <div className="relative h-[50vh] min-h-[400px] w-full bg-slate-900">
        <img
          src={guide.image}
          alt={guide.title}
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>

        <div className="absolute top-8 left-4 sm:left-8 z-10">
          <Link
            to="/guides"
            className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white px-4 py-2 rounded-xl transition-colors font-medium text-sm"
          >
            <ChevronLeft className="w-4 h-4" /> Back to Guides
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 w-full p-6 sm:p-12 max-w-5xl mx-auto">
          <div className="flex gap-2 mb-4 flex-wrap">
            {guide.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-bold text-slate-900 bg-white px-3 py-1 rounded-full uppercase tracking-wide shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight max-w-4xl drop-shadow-lg">
            {guide.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-white/90 text-sm font-medium">
            <div className="flex items-center gap-3">
              <img
                src={guide.author.avatar}
                alt={guide.author.name}
                className="w-10 h-10 rounded-full object-cover border-2 border-white/20"
              />
              <span>By {guide.author.name}</span>
            </div>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" /> {article.updatedLabel}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" /> {article.readTime}
            </span>
            <span className="flex items-center gap-1.5">
              <Eye className="w-4 h-4" /> {guide.views} views
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="hidden lg:block lg:col-span-1">
          <div className="sticky top-24 flex flex-col gap-4">
            <button
              onClick={() => setIsLiked(!isLiked)}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-sm border ${isLiked ? "bg-red-50 border-red-200 text-red-600" : "bg-white border-slate-200 text-slate-500 hover:border-slate-300"}`}
              aria-label={isLiked ? "Unlike article" : "Like article"}
            >
              <Heart className={`w-5 h-5 ${isLiked ? "fill-red-600" : ""}`} />
            </button>
            <button
              className="w-12 h-12 rounded-full bg-white border border-slate-200 text-slate-500 flex items-center justify-center hover:border-slate-300 transition-all shadow-sm"
              aria-label="Comment on article"
            >
              <MessageCircle className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsSaved(!isSaved)}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-sm border ${isSaved ? "bg-slate-900 border-slate-900 text-white" : "bg-white border-slate-200 text-slate-500 hover:border-slate-300"}`}
              aria-label={isSaved ? "Unsave article" : "Save article"}
            >
              <BookmarkPlus className="w-5 h-5" />
            </button>
            <button
              className="w-12 h-12 rounded-full bg-white border border-slate-200 text-slate-500 flex items-center justify-center hover:border-slate-300 transition-all shadow-sm"
              aria-label="Share article"
            >
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="lg:col-span-8">
          <article className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200">
            <div className="prose prose-lg prose-slate max-w-none text-slate-700 leading-relaxed">
              <p className="lead text-xl sm:text-2xl text-slate-800 mb-8 font-medium leading-normal">
                {article.lead}
              </p>

              {article.sections.map((section, index) => (
                <section key={section.heading}>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-12 mb-6">
                    {index + 1}. {section.heading}
                  </h2>

                  {section.image && (
                    <img
                      src={section.image.src}
                      alt={section.image.alt}
                      className="w-full rounded-2xl my-8 object-cover"
                      loading="lazy"
                    />
                  )}

                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}

                  {section.bullets && (
                    <ul className="space-y-3 my-6 list-disc pl-5">
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}

                  {section.note && (
                    <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl my-8">
                      <h4 className="font-bold text-amber-900 mb-2 flex items-center gap-2">
                        <AlertCircle className="w-5 h-5" /> Travel note
                      </h4>
                      <p className="text-amber-800 text-sm m-0">{section.note}</p>
                    </div>
                  )}
                </section>
              ))}
            </div>

            <FAQSection title="Article Questions" faqs={article.faqs} />

            <div className="mt-12 pt-8 border-t border-slate-100">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex gap-4 flex-wrap">
                  {guide.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm font-medium text-slate-600 bg-slate-100 px-4 py-2 rounded-lg"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-slate-500 font-medium">Was this helpful?</span>
                  <button className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-slate-200 hover:border-red-600 hover:text-red-600 transition-colors font-medium">
                    <ThumbsUp className="w-4 h-4" /> Yes
                  </button>
                </div>
              </div>
            </div>
          </article>

          <div className="lg:hidden flex items-center justify-between bg-white p-4 rounded-2xl shadow-sm border border-slate-200 mt-6">
            <button
              onClick={() => setIsLiked(!isLiked)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${isLiked ? "bg-red-50 text-red-600" : "bg-slate-50 text-slate-600"}`}
            >
              <Heart className={`w-5 h-5 ${isLiked ? "fill-red-600" : ""}`} />{" "}
              {isLiked ? "Liked" : "Like"}
            </button>
            <button
              onClick={() => setIsSaved(!isSaved)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${isSaved ? "bg-slate-900 text-white" : "bg-slate-50 text-slate-600"}`}
            >
              <BookmarkPlus className="w-5 h-5" /> {isSaved ? "Saved" : "Save"}
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 text-slate-600">
              <Share2 className="w-5 h-5" /> Share
            </button>
          </div>
        </div>

        <aside className="lg:col-span-3">
          <div className="sticky top-24 space-y-6">
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 text-center">
              <img
                src={guide.author.avatar}
                alt={guide.author.name}
                className="w-20 h-20 rounded-full mx-auto object-cover mb-4 shadow-sm"
              />
              <h3 className="font-bold text-slate-900 text-lg">{guide.author.name}</h3>
              <p className="text-sm text-slate-500 mt-2 mb-6">
                Travel writer focused on practical China routes, food, and first-time visitor
                logistics.
              </p>
              <button className="w-full bg-slate-900 hover:bg-slate-800 text-white py-2.5 rounded-xl font-medium transition-colors">
                Follow Author
              </button>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-4 pb-4 border-b border-slate-100">
                Read Next
              </h3>
              <div className="space-y-4">
                {GUIDES.filter((item) => item.id !== guide.id)
                  .slice(0, 3)
                  .map((related) => (
                    <Link key={related.id} to={`/guide/${related.id}`} className="flex gap-4 group">
                      <img
                        src={related.image}
                        alt={related.title}
                        className="w-16 h-16 rounded-lg object-cover shrink-0"
                      />
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 line-clamp-2 group-hover:text-red-600 transition-colors">
                          {related.title}
                        </h4>
                        <div className="text-xs text-slate-500 mt-1">{related.views} views</div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
