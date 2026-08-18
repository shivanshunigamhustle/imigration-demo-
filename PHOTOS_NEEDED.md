# VisaBridge — Photos Needed

The site already runs with zero photos — every image slot shows a soft gradient
placeholder until a real file exists. **Drop a file at the exact path below and
it appears automatically** — no code changes needed (the `Img` component just
tries the path and falls back gracefully if it's missing).

Save everything as `.jpg` into `public/images/...` using the folder structure
below (already created). Recommended: generate at ~2x the target size for
retina screens, then export as JPG (photos) — quality ~80 is plenty.

Each entry has a ready-to-paste prompt you can drop straight into ChatGPT/DALL·E.

---

## 1. Home — hero landmark collage
4 polaroid-style photos, portrait/landscape mix, natural light, editorial travel-photography look (not stock-photo cheesy).

| Path | Size | Prompt |
|---|---|---|
| `public/images/hero/collage-eiffel.jpg` | 600×760 (portrait) | "Editorial travel photo of the Eiffel Tower, Paris, golden hour light, shot from a low angle in a park, warm cinematic color grade, no people in focus" |
| `public/images/hero/collage-opera.jpg` | 640×520 (landscape) | "Editorial travel photo of the Sydney Opera House from the harbour, soft morning light, warm cinematic color grade, wide shot" |
| `public/images/hero/collage-liberty.jpg` | 600×760 (portrait) | "Editorial travel photo of the Statue of Liberty, New York, blue sky, shot from a ferry, warm cinematic color grade" |
| `public/images/hero/collage-skyline.jpg` | 680×560 (landscape) | "Editorial photo of a modern city skyline at dusk (Toronto or Vancouver style), warm lights turning on, cinematic color grade" |

## 2. Home — client avatar stack
Small circular headshots, diverse, natural/candid (not corporate stock).

| Path | Size |
|---|---|
| `public/images/people/avatar-1.jpg` | 200×200 |
| `public/images/people/avatar-2.jpg` | 200×200 |
| `public/images/people/avatar-3.jpg` | 200×200 |
| `public/images/people/avatar-4.jpg` | 200×200 |

Prompt template: *"Natural candid headshot portrait of a [young professional woman / young professional man], warm smile, soft daylight, plain neutral background, photographic not illustrated"* — vary ethnicity/age across the 4.

## 3. Destinations — country cards
Landscape, 4:3-ish, iconic but not cliché.

| Path | Size | Prompt |
|---|---|---|
| `public/images/destinations/canada.jpg` | 480×320 | "Photo of Banff or Toronto skyline in autumn, warm editorial color grade" |
| `public/images/destinations/australia.jpg` | 480×320 | "Photo of Sydney Opera House and harbour bridge at golden hour" |
| `public/images/destinations/uk.jpg` | 480×320 | "Photo of London skyline with the Shard and Thames at dusk" |
| `public/images/destinations/usa.jpg` | 480×320 | "Photo of New York City skyline from across the river, warm light" |

## 4. Pathways (dashboard) — user avatars
Same person, two crops (small nav thumbnail + larger profile-card photo).

| Path | Size | Prompt |
|---|---|---|
| `public/images/dashboard/sarah-avatar.jpg` | 100×100 | "Candid headshot portrait of a South Asian woman in her late 20s, software engineer, friendly smile, soft studio light, neutral background" |
| `public/images/dashboard/sarah-profile.jpg` | 240×240 | Same person as above, slightly wider crop |

## 5. How It Works
| Path | Size | Prompt |
|---|---|---|
| `public/images/howitworks/traveler-mountains.jpg` | 900×840 | "Cinematic photo from behind of a person with a backpack standing on a ridge overlooking mountains and a valley, golden hour, sense of new beginnings, warm color grade" |
| `public/images/howitworks/rahul-avatar.jpg` | 100×100 | "Candid headshot portrait of a South Asian man in his 30s, warm smile, soft daylight, neutral background" |

## 6. Success Stories
| Path | Size | Prompt |
|---|---|---|
| `public/images/stories/ananya-graduation.jpg` | 900×760 | "Photo of a young South Asian woman in a graduation cap and gown, smiling, university campus background, warm afternoon light, editorial not stock-photo" |
| `public/images/stories/amit-skilled-worker.jpg` | 240×240 | "Candid photo of a South Asian man in his 30s at an outdoor Australian city setting, casual professional attire, natural light" |
| `public/images/stories/priya-student.jpg` | 240×240 | "Candid photo of a South Asian woman in her early 20s, student, on a UK university campus, natural light" |
| `public/images/stories/kapoor-family.jpg` | 240×240 | "Candid photo of a South Asian family of four (parents + two kids) outdoors in a Canadian city park, smiling, natural light" |

## 7. Success Stories — resource cards
| Path | Size | Prompt |
|---|---|---|
| `public/images/resources/canada-pr-guide.jpg` | 400×220 | "Photo of the Canadian flag or a Canadian city street, editorial travel-guide cover style" |
| `public/images/resources/top-universities-australia.jpg` | 400×220 | "Photo of a university campus building in Australia, sunny day" |
| `public/images/resources/uk-skilled-worker.jpg` | 400×220 | "Photo of central London office district, professional editorial style" |
| `public/images/resources/life-in-canada.jpg` | 400×220 | "Photo of a cozy Canadian neighborhood street in autumn" |

## 8. Book Consultation — advisor avatars
| Path | Size |
|---|---|
| `public/images/advisors/advisor-1.jpg` | 200×200 |
| `public/images/advisors/advisor-2.jpg` | 200×200 |
| `public/images/advisors/advisor-3.jpg` | 200×200 |

Prompt template: *"Professional but warm headshot portrait of an immigration advisor, [gender/ethnicity varied], business casual, soft studio light, neutral background, photographic not illustrated"*

---

### Tips
- Keep a consistent warm, slightly desaturated color grade across all photos so the site feels like one shoot, not a stock-photo grab-bag.
- Avatars (people/, dashboard/, stories/, advisors/) should all feel like the same "photography style" — pick one prompt tone and reuse it.
- Nothing here is required before the site is usable — it already looks complete with placeholders. Add photos whenever ready, in any order.
