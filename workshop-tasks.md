# Quest 1 - The Mighty Button

#### Lore

_click_ _click_.... Our heroes journey can not start if we can not even click a button!

#### Intro

For consistent design and functionality we wish to create a Button component that can be reused in our application.

The component currently has the 3 variables `variant`, `small` and `disabled`, but they are not exposed, and can not be
set by parent components.

Read about [Component Bindings](https://svelte.dev/tutorial/component-bindings) to find out more.

We also wish to expose the `click` event of the inner button so any parent components, as that is the main use case for
a button.

And lastly our button should also have some content. We wish for anything that is inside our Buttons tag to be reflected
into the inner button. Example: `<Button>The should be displayed inside the button</Button>`

#### Files

- `src/lib/components/button/Button.svelte`

#### Goal

- Expose the variables `variant`, `small` and `disabled` so that they can be set by the parent component.
- Propagate the `click` event from the button to parent components.
- Use `slots` to display the content our Buttons html tag in parent components.

#### Links

- [Event Forwarding](https://svelte.dev/tutorial/event-forwarding)
- [Component Bindings](https://svelte.dev/tutorial/component-bindings)
- [Slots](https://svelte.dev/tutorial/slots)

#### Hints

- `npm run hint 1a`

# Quest 2 - ??

#### Lore

No one hero is the same! Let them show their uniqueness

#### Intro

Should we change bindings from attributes to class or race?

#### Files

#### Goal

#### Links

- [Text Inputs](https://svelte.dev/tutorial/text-inputs)

#### Hints

- `npm run hint 2a`

# Quest 3 - Boosting our Heroes stats

#### Lore

Our mighty heroes seem a bit weak. Luckily we are able to assist them by boosting their attributes effects on their
stats.

#### Intro

The point of this task is to use [Reactive Declarations](https://svelte.dev/tutorial/reactive-declarations) to change
one value whenever any referenced values change.

#### Files

- `src/lib/components/stats/Stats.svelte`

#### Goal

- 1 point in **strength** should increase the **minimum damage** with **2**.
- 1 point in **strength** should increase the **maximum damage** with **3**.
- 1 point in **dexterity** should increase the **block chance** with **0.5**.
- 1 point in **constitution** should increase the **hitpoints** with **5**.
- 1 point in **wisdom** should increase the **mana** with **10**.
- 1 point in **intelligence** should increase the **spellpower** with **2.5**.
- When the **charisma** is **< 12** speech should be **Timid**, **> 12** speech should be **Well Spoken**, **> 16**
  speech should be **Charming**.

#### Links

- [Reactive Declarations](https://svelte.dev/tutorial/reactive-declarations)

#### Hints

- `npm run hint 3a`

# Quest 4 - Skills to desire

#### Lore

Our heroes look mighty powerful! But they do still not seem satisfied... Maybe we should let them train som skills?

#### Intro

The current solution provides a list of skills and those selected. The selection process offers no animation and just snaps.

We want an animation to occur when selecting and removing skills.

#### Files

`src/lib/components/skill-select/SkillSelect.svelte`

#### Goal

- Use [Animations](https://svelte.dev/tutorial/animate) and [Transitions](https://svelte.dev/tutorial/transition) to animate the skill selection.

#### Links

- [Animations](https://svelte.dev/tutorial/animate)
- [Transitions](https://svelte.dev/tutorial/transition)

#### Hints

- `npm run hint 4a`

# Quest 5 - Indecisive Heroes

#### Lore

Some of our heroes seem to need help to decide what attributes they have, and are requesting our assistance.

#### Intro

Svelte is full of useful tools for animating changes. Start by looking
into [Motion (Tween/Spring)](https://svelte.dev/tutorial/tweened) and how you can animate the attributes changing.

When this is working for `addPoint` and `subtractPoint` fill inn the `randomize` button. Remember to also update and
animate `pointsRemaining`.

#### Files

- `src/lib/components/attribute-overview/AttributeOverview.svelte`

#### Goal

- Use [Motion (Tween/Spring)](https://svelte.dev/tutorial/tweened) to animate numbers changing.
- Fill inn the `randomize` method with logic to randomly assign attribute points.

#### Links

- [Motion (Tween/Spring)](https://svelte.dev/tutorial/tweened)

#### Hints

- `npm run hint 5a`

# Quest 6 - Beauties and the Beasts

#### Lore

Someone has vandalized our hall of fame, and all our heroes' pictures were stolen! Help them recreate their pictures.

#### Intro

Currently, the `PortraitPicker` component shows a modal where we should be able to pick a portrait for our character,
but nothing shows up.

To get a portrait we first have to fetch a list of portrait IDs from our server. We then have to fetch each portrait to
show it. Now, this is a lot of asynchronous logic, and we'll be dealing with
[Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

Promises might seem scary, but luckily Svelte has a special construct for dealing with them, _directly in our markup_:
[Await Blocks](https://svelte.dev/tutorial/await-blocks).

Short explanation of promises: When you "fire" a promise with a target URL, it goes through a couple of states:

1. First it's in a loading state while it resolves the URL.
2. Then it either:
   1. Resolves with a value.
   2. Rejects with an error.

In this task, you need to deal with two different promises, one which fetches all the portrait IDs, and another which
fires based on the resolved value of the first promise, and use await blocks to handle this in your markup.

To help you with dealing with the different states of the promises, the `Loader` and `PortraitPreview` components will
be essential.

#### Files

- `src/lib/components/portraits/portrait-selection/PortraitSelection.svelte`

#### Goal

- Use an await block to show three different things, based on the state of the `getPortraitsPromise` promise:
  - Loading: A `Loader` component.
  - Resolved: For now, just show the IDs that were fetched, see next goal for improving this.
  - Rejected: An error message.
- When you have a working await block for the list of portrait IDs, use an
  [each block](https://svelte.dev/tutorial/each-blocks) to iterate over each of the IDs and fetch the portrait itself.
  - Note: The portrait is located at the URL `api/portraits/{ID}`.
- Inside the each block, use another await block to render the different states of the portrait promises:
  - Loading: A `PortraitPreview` where the `isLoading` prop is set to `true`.
  - Resolved: A `PortraitPreview` with the value prop set to the `portrait` property on the resolved value.
  - Rejected: An error message.

#### Links

- [Await Blocks](https://svelte.dev/tutorial/await-blocks)
- [Each Blocks](https://svelte.dev/tutorial/each-blocks)
- [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

#### Hints

- `npm run hint 6a`
- `npm run hint 6b`
- `npm run hint 6c`

# Quest 7 - Recruitment Board

#### Lore

_I swear I saw the recruitment board somewhere around here..._

#### Intro

#### Files

- `src/routes/characters/index.svelte`

#### Goal

- `Characters` should be displayed in the nav-bar.
- When clicked it should go the URL `/characters`

#### Links

- [Await Blocks](https://svelte.dev/tutorial/await-blocks)
- [Each Blocks](https://svelte.dev/tutorial/each-blocks)

#### Hints

- `npm run hint 7a`

# Quest 8 - Recruitment List

#### Lore

Some lore text

#### Intro

Add Character List

#### Files

- `src/routes/characters/index.svelte`

#### Goal

#### Links

- [Await Blocks](https://svelte.dev/tutorial/await-blocks)
- [Each Blocks](https://svelte.dev/tutorial/each-blocks)

#### Hints

- `npm run hint 7a`

# Titan Quest 1 - Select your hero!

#### Lore

Our heroes stand tall in our Hall of Fame, but some of our visitors want a personal audience with some of the heroes.

#### Intro

#### Files

#### Goal

#### Links

#### Hints

- `npm run hint t1a `

# Titan Quest 2 - Select your hero!

#### Lore

Our heroes stand tall in our Hall of Fame, but some of our visitors want a personal audience with some of the heroes.

#### Intro

#### Files

#### Goal

#### Links

#### Hints

- `npm run hint t1a `