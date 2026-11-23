export const YOUTUBE_CHANNEL_ID = "UCXNkAFUFUpXq4NxBLK7QSuQ";
export const YOUTUBE_CHANNEL_HANDLE = "@yashgoogleads";
export const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@yashgoogleads/shorts";

// Curated 16:9 Landscape Guides
export const FALLBACK_VIDEOS = [
  {
    id: "HY7Td-AJ45A",
    title: "Google Ads Account Suspended: Policy Solutions & Review",
    tag: "Account Recovery",
    thumbnail: "https://i.ytimg.com/vi/HY7Td-AJ45A/hqdefault.jpg",
  },
  {
    id: "Ai40t_K5DjM",
    title: "Start Google Ads with ₹500/day: Step-by-Step Setup",
    tag: "Budget Strategy",
    thumbnail: "https://i.ytimg.com/vi/Ai40t_K5DjM/hqdefault.jpg",
  },
  {
    id: "QSFD_ExZtcE",
    title: "Google Ads Expert in India: Full PPC Management",
    tag: "Case Study & Growth",
    thumbnail: "https://i.ytimg.com/vi/QSFD_ExZtcE/hqdefault.jpg",
  },
];

export const FALLBACK_SHORTS = [
  {
    id: "SRnoxX34JTs",
    title: "Why My Google Ad Account Is Suspended? Stop Doing This! 🚨",
    thumbnail: "https://i.ytimg.com/vi/SRnoxX34JTs/hqdefault.jpg",
  },
  {
    id: "AnN0wkvgdRU",
    title: "Google Ads Suspended Due to Advertiser Verification? Fix This Mismatch! 🚨",
    thumbnail: "https://i.ytimg.com/vi/AnN0wkvgdRU/hqdefault.jpg",
  },
  {
    id: "VX9psiBvY5c",
    title: "Why Google Ads Account Is Suspended? Check Your Website Footer! 🚨",
    thumbnail: "https://i.ytimg.com/vi/VX9psiBvY5c/hqdefault.jpg",
  },
  {
    id: "d_u_0zYuaPQ",
    title: "How One Lead Form Mistake Suspends Your Google Ads Account! ❌",
    thumbnail: "https://i.ytimg.com/vi/d_u_0zYuaPQ/hqdefault.jpg",
  },
  {
    id: "D4E0JUPKd7w",
    title: "Brand Logo Copy Kiya Toh Google Ads Account BAND! 🚨",
    thumbnail: "https://i.ytimg.com/vi/D4E0JUPKd7w/hqdefault.jpg",
  },
  {
    id: "f5cmU3h7J2I",
    title: "Hidden Fees = Google Ads Account SUSPENDED! ❌",
    thumbnail: "https://i.ytimg.com/vi/f5cmU3h7J2I/hqdefault.jpg",
  },
  {
    id: "sklk9efGbyI",
    title: "Unacceptable Business Practices in Google Ads Explained! ⚠️",
    thumbnail: "https://i.ytimg.com/vi/sklk9efGbyI/hqdefault.jpg",
  },
  {
    id: "tNZEtCL_5pI",
    title: "Google Ads Account Bina Warning Ke Suspend? 😱 | Unacceptable Business Practices",
    thumbnail: "https://i.ytimg.com/vi/tNZEtCL_5pI/hqdefault.jpg",
  },
  {
    id: "k6p1ltTuQno",
    title: "Google Ads Account Suspended? Contact Us for Recovery! 🚨",
    thumbnail: "https://i.ytimg.com/vi/k6p1ltTuQno/hqdefault.jpg",
  },
  {
    id: "vFXfDDN4LqI",
    title: "Google Ads Start Karne Se Pehle Website Check Karna Zaroori Hai! 🚀",
    thumbnail: "https://i.ytimg.com/vi/vFXfDDN4LqI/hqdefault.jpg",
  },
  {
    id: "QSHx-vXezwY",
    title: "How to Check Competitors' Ads on Google Ads? | Ads Transparency Center 🔍",
    thumbnail: "https://i.ytimg.com/vi/QSHx-vXezwY/hqdefault.jpg",
  },
  {
    id: "4UXilGkj2R4",
    title: "Google Ads Account Suspended? What to Do Next | Step-by-Step Guide",
    thumbnail: "https://i.ytimg.com/vi/4UXilGkj2R4/hqdefault.jpg",
  },
  {
    id: "94cK_U0Yn04",
    title: "Competitor's Google Ads Are Running, But My Account Is Suspended! 😳 Why?",
    thumbnail: "https://i.ytimg.com/vi/94cK_U0Yn04/hqdefault.jpg",
  },
  {
    id: "8hj4xcidL4o",
    title: "Google Ads Account Suspension Recovery – What Are Your Chances of Getting It Back? 🤔",
    thumbnail: "https://i.ytimg.com/vi/8hj4xcidL4o/hqdefault.jpg",
  },
  {
    id: "2K6x6ovTMMc",
    title: "How to Check Your Competitors' Google Ads? 🔍 | Spy on Competitor Ads!",
    thumbnail: "https://i.ytimg.com/vi/2K6x6ovTMMc/hqdefault.jpg",
  },
];

/**
 * Fetches and parses the latest videos and shorts from the YouTube channel RSS feed.
 * Caches with Next.js ISR for 3600 seconds (1 hour).
 */
export async function getYouTubeChannelContent() {
  try {
    const feedUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${YOUTUBE_CHANNEL_ID}`;
    const res = await fetch(feedUrl, {
      next: { revalidate: 3600 },
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      },
    });

    if (!res.ok) {
      console.warn(`YouTube feed returned status ${res.status}, using fallback data.`);
      return { videos: FALLBACK_VIDEOS, shorts: FALLBACK_SHORTS };
    }

    const xml = await res.text();

    // Parse <entry> blocks from the Atom feed
    const entryMatches = xml.match(/<entry>[\s\S]*?<\/entry>/g) || [];
    if (entryMatches.length === 0) {
      return { videos: FALLBACK_VIDEOS, shorts: FALLBACK_SHORTS };
    }

    const allItems = entryMatches.map((entry) => {
      const idMatch = entry.match(/<yt:videoId>([^<]+)<\/yt:videoId>/);
      const titleMatch = entry.match(/<title>([^<]+)<\/title>/);
      const publishedMatch = entry.match(/<published>([^<]+)<\/published>/);
      const mediaThumbMatch = entry.match(/<media:thumbnail[^>]+url="([^"]+)"/);

      const id = idMatch ? idMatch[1] : "";
      const rawTitle = titleMatch ? titleMatch[1] : "";
      const published = publishedMatch ? publishedMatch[1] : "";
      const thumbnail = mediaThumbMatch ? mediaThumbMatch[1] : `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

      // Clean title for display by removing hashtag
      const cleanTitle = rawTitle.replace(/#shorts?/gi, "").trim();

      return {
        id,
        title: cleanTitle || rawTitle,
        published,
        thumbnail,
        isShort: true, // User creates exclusively Shorts on their channel
        tag: "Quick Tip",
      };
    }).filter((item) => item.id);

    return {
      videos: FALLBACK_VIDEOS,
      shorts: allItems.length > 0 ? allItems : FALLBACK_SHORTS,
      channelId: YOUTUBE_CHANNEL_ID,
      channelUrl: YOUTUBE_CHANNEL_URL,
    };
  } catch (err) {
    console.error("Error fetching YouTube RSS feed:", err);
    return {
      videos: FALLBACK_VIDEOS,
      shorts: FALLBACK_SHORTS,
      channelId: YOUTUBE_CHANNEL_ID,
      channelUrl: YOUTUBE_CHANNEL_URL,
    };
  }
}
