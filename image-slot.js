AI CRAWLER ACCESS — INSTALL NOTES
=================================

robots.txt and sitemap.xml control crawler access at the DOMAIN level.
They CANNOT live inside the landing page file. They must be served from
the web root:

    https://www.awningsandsignsunlimited.com/robots.txt
    https://www.awningsandsignsunlimited.com/sitemap.xml

HOW TO INSTALL
--------------
On Hibu (current host): Hibu manages robots.txt for you. Open a support
ticket and ask them to replace the site robots.txt with the file included
here, or to add the AI user-agent Allow rules to the existing one. Ask them
to confirm sitemap.xml is being generated and submitted.

On your own hosting (Netlify / Vercel / cPanel / nginx): drop both files in
the public web root next to index.html. No configuration needed.

WHAT THIS FILE ALLOWS
---------------------
Explicit Allow for: GPTBot, OAI-SearchBot, ChatGPT-User (OpenAI);
Google-Extended, GoogleOther, Googlebot (Gemini + AI Overviews);
ClaudeBot, Claude-User, Claude-SearchBot, anthropic-ai (Anthropic);
xAI-Bot / GrokBot (Grok); PerplexityBot, Perplexity-User;
plus Applebot-Extended, Meta, DuckAssistBot, Amazonbot, Bingbot, CCBot
and other answer engines.

IMPORTANT NOTES
---------------
1. "GoogleGeminiBot" and "GoogleAIBot" are not real user-agent tokens.
   Google controls Gemini and AI Overviews access through Google-Extended
   and GoogleOther, both of which are allowed above. The requested names
   are included anyway and are harmless.

2. Allowing a crawler does not guarantee citation. It only removes the
   block. Being cited depends on your schema, content clarity and
   authority — the JSON-LD on the landing page covers the schema half.

3. Allowing GPTBot and CCBot also permits use of your content for model
   training. If you want visibility in AI answers WITHOUT training use,
   remove GPTBot and CCBot but keep OAI-SearchBot, ChatGPT-User,
   Claude-SearchBot, Perplexity and Google-Extended.

4. Verify after going live:
   https://www.awningsandsignsunlimited.com/robots.txt
   and test the schema at https://validator.schema.org/

5. Submit sitemap.xml in Google Search Console and Bing Webmaster Tools.
   Update <lastmod> when page content changes materially.
