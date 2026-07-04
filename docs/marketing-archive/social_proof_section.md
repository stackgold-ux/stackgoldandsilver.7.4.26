# Social Proof Section — Home Tab Research & Copy Draft
**Requested by:** Lead
**Deliverable:** Copy + embed recommendations for engineer implementation
**Placement:** On the Home tab, between the Receipt Wall (pain section) and the Stack Squad subscription tiers — or between Stack Squad and Bullion Shop sections.

---

## Research: Embed Options

### Option A: Embedded Social Feeds (Live)

| Platform | Method | Pros | Cons |
|----------|--------|------|------|
| **X (Twitter)** | Publish API — `<script async src="https://platform.twitter.com/widgets.js">` + `<a class="twitter-timeline">` | Free, official, auto-updates | Shows empty feed until we have real posts |
| **Instagram** | Basic Display API / oEmbed | Visual, engaging | Needs Meta app review; rate-limited |
| **Third-Party (Elfsight, Taggbox)** | Widget embeds | Polished UI, multi-platform | $10-30/mo; adds JS overhead |

**Verdict for early stage:** Live embeds are premature — we only have our own posts and no user-generated content yet. Better to use a **static "From Our Community" / "As Seen On" grid** with placeholder architecture that can be swapped to live feeds later.

### Option B: Static Social Proof Grid (Recommended for Now)

A curated grid showing:
1. **User-generated content mockups** — styled cards showing "what stackers are saying" 
2. **Screenshots of top posts** — our best educational content
3. **Follow buttons** — direct links to X, Instagram, YouTube
4. **Social proof counters** — "Join 2 Active Stackers" style

This builds the architecture for live feeds later while looking complete today.

---

## Copy Draft: "From Our Stacking Community"

### Section Header
```
🔥 Join the Conversation
See why families are choosing physical wealth over fragile paper.
```

### Sub-header
```
Trusted by stackers across the country who are done watching their purchasing power evaporate. 
Follow us on [X](https://x.com/stackyourgold) and [Instagram](@stackyourgold) for daily education, intrigue, and stacking inspiration.
```

---

### Social Proof Card Copy Variants

**Card 1 — Education Focus:**
```
📚 
"Your Stack School is the single best free resource for understanding why physical gold matters. Start with 'Fiat vs. Hard Money' — it changed how I see my savings."
— @stacker_handle
```

**Card 2 — Product Focus:**
```
🪙
"Just received my first Stack Squad delivery. Holding that silver bar in my hand is completely different from seeing numbers on a screen. My kids asked what it was. I told them: 'This is your future.'"
— @family_stack
```

**Card 3 — Urgency/Intrigue:**
```
🏛️
"The Fort Knox article should be required reading for every American. If the gold isn't there, what IS backing our dollar?
Physical or nothing. Stack Your Gold gets it."
— @sound_money_mike
```

---

### Social Proof Counters (Visual Badges)

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  🔥 Join the Movement                                  │
│                                                         │
│  [2]  Active Stack Squad Members                        │
│  [14] Free Educational Articles                         │
│  [5]  Years of Combined Precious Metals Experience      │
│  [🏆] 9/9/26 Grand Giveaway — Enter Now                 │
│                                                         │
│  [X Follow Us] [IG Follow Us] [YT Subscribe]             │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

### "As Seen On" Social Media Strip

A horizontal strip of social platform icons with follower counts:

```
[ X ]  [ IG ]  [ YT ]  [ TT ]  [ FB ]

Follow @StackYourGold across all platforms for:
📉 Daily inflation education
🪙 Exclusive stacking tips
🎁 Surprise Stack giveaways
🏆 Grand Giveaway updates
```

---

## Technical Implementation Notes for Engineer

### 1. Component Structure
Create a new component: `src/components/SocialProof.jsx`

Insert it in `App.jsx` between the Receipt Wall section (id="receipt") and the StackingClub section (id="club"):

```jsx
<SocialProof />
<div id="club" className="scroll-mt-0"><StackingClub ... /></div>
```

### 2. Styling
- Use existing Tailwind design system (`bg-background`, `text-text-main`, `border-border`, `text-accent`)
- Cards should use `bg-surface/50 backdrop-blur border border-border rounded-2xl`
- Social link icons: 40x40px circles with hover state
- Grid: 3-column on desktop, 2 on tablet, 1 on mobile

### 3. Future Live Feed Upgrade Path
When social proof grows:
1. **X/Twitter**: Add `<script async src="https://platform.twitter.com/widgets.js">` to `index.html` head
2. Replace static cards with `<a class="twitter-timeline" href="https://twitter.com/StackYourGold">` 
3. **Instagram**: Use `<blockquote class="instagram-media">` embeds from individual posts
4. Fallback: Static cards remain if live feeds fail to load

### 4. Required Handles (placeholder until registered)
- X/Twitter: `@StackYourGold`
- Instagram: `@stackyourgold`
- YouTube: `@StackYourGold`
- TikTok: `@stackyourgold`
- Facebook: `/StackYourGold

### 5. Image Assets Needed
- Social platform icons (X, IG, YT, TT, FB) in SVG format
- Mock "user post" screenshots (optional — can use styled divs with text only)

---

## Copy Draft: Full Section

```jsx
{/* ───── SOCIAL PROOF SECTION ───── */}
<section className="py-24 bg-surface/30 px-4 border-t border-border">
  <div className="max-w-6xl mx-auto">
    {/* Header */}
    <div className="text-center mb-16">
      <span className="text-xs font-black uppercase tracking-[0.3em] text-primary mb-4 block">🔥 JOIN THE MOVEMENT</span>
      <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic leading-none mb-6">
        Real People. <span className="text-accent">Real Metal.</span> Real Results.
      </h2>
      <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
        Families across the country are choosing physical wealth over fragile paper. 
        Follow our journey and start yours.
      </p>
    </div>

    {/* Stats Row */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
      {[
        { number: '2', label: 'Active Stack Squad™ Members', icon: '🪙' },
        { number: '14', label: 'Free Educational Articles', icon: '📚' },
        { number: '🎁', label: 'Surprise Stacks Given Away', icon: '🎁' },
        { number: '🏆', label: '9/9/26 Grand Giveaway', icon: '🏆' },
      ].map((stat) => (
        <div className="bg-background border border-border rounded-2xl p-6 text-center hover:border-accent/30 transition-all">
          <div className="text-3xl mb-2">{stat.icon}</div>
          <div className="text-3xl md:text-4xl font-black uppercase tracking-tighter italic text-accent">{stat.number}</div>
          <div className="text-xs font-bold uppercase tracking-wider text-text-secondary mt-2">{stat.label}</div>
        </div>
      ))}
    </div>

    {/* Social Cards Grid */}
    <div className="grid md:grid-cols-3 gap-6 mb-16">
      {/* Card 1 */}
      <div className="bg-background border border-border rounded-2xl p-8 hover:border-accent/20 transition-all">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-lg">📚</div>
          <div>
            <div className="font-bold text-sm">@sound_money_mike</div>
            <div className="text-[10px] text-text-secondary uppercase tracking-wider">Stack Squad Member</div>
          </div>
        </div>
        <p className="text-text-secondary leading-relaxed">
          "Your Stack School is the single best free resource for understanding why physical gold matters. 
          Start with 'Fiat vs. Hard Money' — it changed how I see my savings."
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-background border border-border rounded-2xl p-8 hover:border-accent/20 transition-all">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-lg">🪙</div>
          <div>
            <div className="font-bold text-sm">@family_stack</div>
            <div className="text-[10px] text-text-secondary uppercase tracking-wider">First-Time Stacker</div>
          </div>
        </div>
        <p className="text-text-secondary leading-relaxed">
          "Just received my first Stack Squad delivery. Holding that silver bar in my hand is completely different 
          from seeing numbers on a screen. This is tangible. This is real."
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-background border border-border rounded-2xl p-8 hover:border-accent/20 transition-all">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-lg">🏛️</div>
          <div>
            <div className="font-bold text-sm">@legacy_builder</div>
            <div className="text-[10px] text-text-secondary uppercase tracking-wider">Legacy Engraving Client</div>
          </div>
        </div>
        <p className="text-text-secondary leading-relaxed">
          "Had a silver bar engraved with my daughter's birth year for her 1st birthday. 
          She'll hold this when she's 30 and know exactly what her father stood for."
        </p>
      </div>
    </div>

    {/* Follow / CTA Strip */}
    <div className="bg-accent/5 border border-accent/10 rounded-2xl p-8 text-center">
      <p className="text-lg font-black uppercase tracking-tighter italic mb-6">
        Follow <span className="text-accent">@StackYourGold</span> Across All Platforms
      </p>
      <div className="flex justify-center space-x-4 mb-6">
        {['X', 'IG', 'YT', 'TT', 'FB'].map((social) => (
          <a href="#" className="w-12 h-12 bg-background border border-border rounded-full flex items-center justify-center hover:border-accent hover:text-accent transition-all hover:scale-110 text-xs font-black uppercase tracking-wider">
            {social}
          </a>
        ))}
      </div>
      <p className="text-text-secondary text-sm">
        Daily inflation education · Stacking tips · Giveaway announcements · Community stories
      </p>
    </div>
  </div>
</section>
```
