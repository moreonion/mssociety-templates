# Snippets

For useful widgets and beautiful styling only some additional html does the trick. Below, there are custom snippets ready-to-use in your EN template. Just copy a snippet of your choice, select "HTML" in the EN editor and paste it there. Once you've pasted the snippet you may change back to "normal" to continue editing. Save and see the magic happen!

## a word about page building in EN

When copying text from a word processor (e.g. Word or Pages) to an EN copy box, be careful not to copy any formatting and styling as they would override the template. Always use the "Paste as plain text" button in the EN text editor or prepare your texts in plain text format before pasting them to EN. Still, if some styling has sneaked its way into a copy box, there is a "clear formatting" button to remove them.

In the "design" editor, make sure to place everything that's wide content (e.g. a banner image, the main heading or button panels) spanning both columns. Narrow content like copy and form elements should only take up one column. This template only has a single column layout, so whether something is in the left or right column doesn't matter. Start placing elements at the top and leave no empty fields between them, as this would cause EN to insert extra space elements.

To show validation messages on form fields, you'll need to enable error alerts for your forms in EN.

## general elements and classes

### separators

Just add `<hr>` in your content where you want the separator to appear. It's usually black but becomes red when it's next to an `<h1>`. If for some reason you need to change the color, you can add the class `red` or `black`:

```html
<h1>This is my heading</h1>
<p>And now I want a black separator</p>
<hr class="black">
```

### smaller / bigger text

For smaller content you don't expect people to read (e.g. a disclaimer text), add the class `small`. If somethings needs extra attention, you can add the class `big`.

### buttons

You can make any link look like a button by adding the class `button`. For smaller buttons, combine with `small`:

```html
<a class="button small" href"…">A smaller button</a>
```

### videos

```html
<div class="video">
  Paste the embed code from youtube, vimeo, … here
</div>
```

This makes your videos responsive, so they will always fit on the screen (even on tiny mobile screens).

### hiding elements

To hide elements on small screens, give them the class `hide-on-mobile`. To show them on mobile but hide on big screens, use `hide-on-desktop`.


## images

### banner image

Put this copy box first on the page!

```html
<div id="banner">
  Here goes the image (recommended width: 1050px)
</div>
```

A single wide banner image might look too tiny on very small screens. To show only a part of the image on mobile displays, add one of the following classes to the banner:
* `left-on-mobile`: shows the left part of the banner image
* `middle-on-mobile`: shows the middle part of the banner image
* `right-on-mobile`: shows the right part of the banner image

### two images next to each other

To display two images next to each other on desktop size screens, wrap them each like this:

```html
<div class="one-of-two">
  Put the image here (recommended width: 400px)
</div>
```

You may put this inside the banner wrapper or combine with `hide-on-mobile`, too.

### inline images

The template expects images to be prominently displayed pictures and might scale them to fit the page layout. For all small images (e.g. fancy bullet points) that should not be modified in any way, add the class `inline` to the image.

```html
<img class="inline" scr="…" alt="…">
```


## landing pages

### button panels

```html
<div class="panels">

  <div class="panel">
    <div class="panel-image">
      put your image here (recommended 400 x 250px)
    </div>
    <div class="panel-content">
      <h3>Some heading</h3>
      <p>Some content</p>
    </div>
    <div class="panel-button">
      <a class="small button" href="{{link}}">{{button label}}</a>
    </div>
  </div>

  duplicate code for another panel…

</div>
```

Add as many panels as you like and wrap them all within the `panels` div.

To add a link to the second page of your action, or to another EN action, use the tool for setting up internal links. We suggest setting this up on a separate piece of text, and then copying and pasting the link into the right place in the html. Otherwise, EN might make changes to the code above.


## action pages

### copy in form

For copy that is part of the form, add the class `form-content` to make it the same width as the form fields.

### radios on one line

Radio inputs will appear next to each other on one line when the Question name starts with "Marketing permissions".


## thank you pages

### share links

These are social share buttons for Facebook, Twitter and email sharing:

```html
<ul class="share-links">

  <li class="facebook">
    <a class="button" href="https://www.facebook.com/sharer.php?u={{urlencoded url}}" title="Share this via Facebook!" target="_blank" data-share="facebook">
      <i></i><span>Facebook</span>
    </a>
  </li>

  <li class="twitter">
    <a class="button" href="http://twitter.com/share?text={{urlencoded share text}}&amp;url={{urlencoded url}}" title="Share this via Twitter!" target="_blank" data-share="twitter">
      <i></i><span>Twitter</span>
    </a>
  </li>

  <li class="email">
    <a class="button" href="{{EN email share url}}" title="Share this via E-Mail!" target="_blank" data-share="email">
      <i></i><span>E-Mail</span>
    </a>
  </li>

</ul>
```

Make sure to replace the `{{placeholder parts}}` with the real urls and share texts! The name between `<span>name</span>` is what's displayed on the button itself, the `title` pops up when hovering over the button. `<i></i>` makes space for the icon, which will be inserted automatically.

### small lips

```html
<div class="lips-wrapper">
  <img class="inline" src="//moreonion.github.io/mssociety-templates/images/lips_small.png">
</div>
```

### submission tracking

Place this snippet on the thank you page to track submissions (it's hidden so it doesn't matter if it is inside a wrapper or not):

```html
<input type="hidden" name="track-submission" value="1">
```
