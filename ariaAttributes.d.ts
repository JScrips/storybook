/**
 * ARIA Attributes TypeScript Declaration File
 *
 * Complete type definitions for all WAI-ARIA 1.2 attributes with JSDoc documentation.
 * Based on W3C WAI-ARIA 1.2 Specification and MDN Web Docs.
 *
 * @see https://www.w3.org/TR/wai-aria-1.2/
 * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes
 */

// =============================================================================
// VALUE TYPES
// =============================================================================

/** Boolean values for ARIA attributes that accept true/false */
type AriaBoolean = "true" | "false";

/** Tristate values for attributes like aria-checked that support mixed state */
type AriaTristate = "true" | "false" | "mixed";

/** Optional boolean - includes undefined state */
type AriaBooleanOrUndefined = AriaBoolean | "undefined";

/** ID reference - references a single element by ID */
type AriaIdRef = string;

/** ID reference list - space-separated list of element IDs */
type AriaIdRefList = string;

/** Integer value represented as string */
type AriaInteger = `${number}`;

/** Number value (can include decimals) */
type AriaNumber = `${number}`;

// =============================================================================
// GLOBAL ARIA ATTRIBUTES
// These can be used on any HTML element unless specifically disallowed
// =============================================================================

export interface AriaGlobalAttributes {
  // ---------------------------------------------------------------------------
  // Widget Attributes (Global subset)
  // ---------------------------------------------------------------------------

  /**
   * Indicates whether inputting text could trigger display of predictions.
   *
   * Specifies how predictions will be presented if made. Used on combobox,
   * searchbox, or textbox roles.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-autocomplete
   *
   * @example
   * // Suggestions appear inline
   * <input aria-autocomplete="inline" />
   *
   * // Suggestions appear in a list
   * <input aria-autocomplete="list" />
   *
   * // Both inline and list suggestions
   * <input aria-autocomplete="both" />
   *
   * @value "none" - No autocomplete suggestions (default)
   * @value "inline" - Text suggesting completion appears after cursor
   * @value "list" - Collection of possible values displayed in popup
   * @value "both" - Both inline completion and list of suggestions
   */
  "aria-autocomplete"?: "none" | "inline" | "list" | "both";

  /**
   * Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked
   *
   * @example
   * <div role="checkbox" aria-checked="true">Enabled</div>
   * <div role="checkbox" aria-checked="mixed">Partially selected</div>
   *
   * @value "true" - The element is checked
   * @value "false" - The element is not checked
   * @value "mixed" - Mixed state (for checkboxes representing partial selection)
   */
  "aria-checked"?: AriaTristate;

  /**
   * Indicates that the element is perceivable but disabled.
   *
   * When true, the element is not editable or otherwise operable.
   * Unlike HTML disabled, aria-disabled does not prevent focus or click events.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled
   *
   * @example
   * <button aria-disabled="true">Submit (disabled)</button>
   *
   * @value "true" - Element is disabled
   * @value "false" - Element is not disabled (default)
   */
  "aria-disabled"?: AriaBoolean;

  /**
   * Identifies the element(s) that provide an error message for the object.
   *
   * Should reference the ID of an element containing the error message text.
   * Only applies when aria-invalid is set to "true".
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage
   *
   * @example
   * <input aria-invalid="true" aria-errormessage="email-error" />
   * <span id="email-error">Please enter a valid email address</span>
   */
  "aria-errormessage"?: AriaIdRef;

  /**
   * Indicates if a control is expanded or collapsed.
   *
   * Also indicates whether controlled elements are displayed or hidden.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded
   *
   * @example
   * <button aria-expanded="false" aria-controls="menu1">Menu</button>
   * <ul id="menu1" hidden>...</ul>
   *
   * @value "true" - The controlled element(s) are expanded/visible
   * @value "false" - The controlled element(s) are collapsed/hidden
   * @value undefined - Element does not own or control an expandable element
   */
  "aria-expanded"?: AriaBoolean;

  /**
   * Indicates the availability and type of interactive popup element.
   *
   * Specifies what kind of popup can be triggered by the element.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup
   *
   * @example
   * <button aria-haspopup="menu">Options</button>
   * <button aria-haspopup="dialog">Open Settings</button>
   *
   * @value "false" - No popup (default)
   * @value "true" - Has a menu popup (same as "menu")
   * @value "menu" - Has a menu popup
   * @value "listbox" - Has a listbox popup
   * @value "tree" - Has a tree popup
   * @value "grid" - Has a grid popup
   * @value "dialog" - Has a dialog popup
   */
  "aria-haspopup"?:
    | "false"
    | "true"
    | "menu"
    | "listbox"
    | "tree"
    | "grid"
    | "dialog";

  /**
   * Indicates whether the element is exposed to an accessibility API.
   *
   * Setting aria-hidden="true" removes the element and its descendants
   * from the accessibility tree.
   *
   * @warning Never use on focusable elements. Screen reader users may
   * focus an element that isn't visible to them.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden
   *
   * @example
   * // Decorative icon hidden from screen readers
   * <span class="icon" aria-hidden="true">★</span>
   *
   * @value "true" - Hidden from accessibility API
   * @value "false" - Exposed to accessibility API (default)
   */
  "aria-hidden"?: AriaBoolean;

  /**
   * Indicates the entered value does not conform to expected format.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid
   *
   * @example
   * <input aria-invalid="true" aria-errormessage="error1" />
   *
   * @value "false" - No errors detected (default)
   * @value "true" - Value has failed validation
   * @value "grammar" - Grammatical error detected
   * @value "spelling" - Spelling error detected
   */
  "aria-invalid"?: "false" | "true" | "grammar" | "spelling";

  /**
   * Defines a string value that labels the current element.
   *
   * Use when visible text label is not available. Prefer aria-labelledby
   * when visible text exists.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label
   *
   * @example
   * <button aria-label="Close dialog">×</button>
   * <nav aria-label="Main navigation">...</nav>
   */
  "aria-label"?: string;

  /**
   * Defines the hierarchical level of an element within a structure.
   *
   * Commonly used with headings, tree items, and nested elements.
   * Value must be an integer >= 1.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level
   *
   * @example
   * <div role="heading" aria-level="2">Section Title</div>
   * <li role="treeitem" aria-level="1">Parent</li>
   */
  "aria-level"?: AriaInteger;

  /**
   * Indicates whether an element is modal when displayed.
   *
   * When true, assistive technologies should not navigate to content
   * outside the modal.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-modal
   *
   * @example
   * <div role="dialog" aria-modal="true">
   *   <h2>Dialog Title</h2>
   *   <p>Dialog content...</p>
   * </div>
   *
   * @value "true" - Element is modal
   * @value "false" - Element is not modal (default)
   */
  "aria-modal"?: AriaBoolean;

  /**
   * Indicates whether a textbox accepts multiple lines of input.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiline
   *
   * @example
   * <div role="textbox" aria-multiline="true" contenteditable="true">
   *   Enter multiple lines...
   * </div>
   *
   * @value "true" - Textbox accepts multiple lines
   * @value "false" - Textbox accepts single line only (default)
   */
  "aria-multiline"?: AriaBoolean;

  /**
   * Indicates that the user may select more than one item from current descendants.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable
   *
   * @example
   * <ul role="listbox" aria-multiselectable="true">
   *   <li role="option" aria-selected="true">Option 1</li>
   *   <li role="option" aria-selected="false">Option 2</li>
   * </ul>
   *
   * @value "true" - Multiple items can be selected
   * @value "false" - Only one item can be selected (default)
   */
  "aria-multiselectable"?: AriaBoolean;

  /**
   * Indicates whether the element's orientation is horizontal, vertical, or unknown.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation
   *
   * @example
   * <div role="slider" aria-orientation="horizontal">...</div>
   * <ul role="menu" aria-orientation="vertical">...</ul>
   *
   * @value "horizontal" - Element is horizontally oriented
   * @value "vertical" - Element is vertically oriented
   * @value "undefined" - Orientation is unknown/ambiguous (default for most roles)
   */
  "aria-orientation"?: "horizontal" | "vertical" | "undefined";

  /**
   * Defines a short hint intended to help the user with data entry.
   *
   * Similar to HTML placeholder attribute. Only use when control has no value.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-placeholder
   *
   * @example
   * <div role="textbox" aria-placeholder="Enter your name">...</div>
   */
  "aria-placeholder"?: string;

  /**
   * Indicates the current "pressed" state of a toggle button.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed
   *
   * @example
   * <button aria-pressed="true">Bold</button>
   * <button aria-pressed="mixed">Mixed state</button>
   *
   * @value "true" - Button is pressed
   * @value "false" - Button is not pressed
   * @value "mixed" - Mixed state (partially pressed)
   * @value undefined - Element is not a toggle button
   */
  "aria-pressed"?: AriaTristate;

  /**
   * Indicates that the element is not editable, but is otherwise operable.
   *
   * Unlike disabled, readonly elements can still receive focus.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly
   *
   * @example
   * <input type="text" aria-readonly="true" value="Cannot edit this" />
   *
   * @value "true" - Element is read-only
   * @value "false" - Element is editable (default)
   */
  "aria-readonly"?: AriaBoolean;

  /**
   * Indicates that user input is required on the element before form submission.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required
   *
   * @example
   * <input type="email" aria-required="true" />
   *
   * @value "true" - Input is required
   * @value "false" - Input is optional (default)
   */
  "aria-required"?: AriaBoolean;

  /**
   * Indicates the current "selected" state of various widgets.
   *
   * Used on options, rows, tabs, and other selectable items.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected
   *
   * @example
   * <li role="option" aria-selected="true">Selected option</li>
   * <div role="tab" aria-selected="true">Active Tab</div>
   *
   * @value "true" - Element is selected
   * @value "false" - Element is not selected
   * @value undefined - Element is not selectable
   */
  "aria-selected"?: AriaBoolean;

  /**
   * Indicates if items in a table or grid are sorted in ascending or descending order.
   *
   * Only applies to column and row header cells.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort
   *
   * @example
   * <th aria-sort="ascending">Name</th>
   * <th aria-sort="descending">Date</th>
   *
   * @value "none" - No sort applied (default for sortable columns)
   * @value "ascending" - Sorted in ascending order (A-Z, 0-9)
   * @value "descending" - Sorted in descending order (Z-A, 9-0)
   * @value "other" - Sorted by some other algorithm
   */
  "aria-sort"?: "none" | "ascending" | "descending" | "other";

  /**
   * Defines the maximum allowed value for a range widget.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax
   *
   * @example
   * <div role="slider" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50">
   */
  "aria-valuemax"?: AriaNumber;

  /**
   * Defines the minimum allowed value for a range widget.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin
   *
   * @example
   * <div role="slider" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50">
   */
  "aria-valuemin"?: AriaNumber;

  /**
   * Defines the current value for a range widget.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow
   *
   * @example
   * <div role="slider" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50">
   * <div role="progressbar" aria-valuenow="75">75% complete</div>
   */
  "aria-valuenow"?: AriaNumber;

  /**
   * Defines the human-readable text alternative of aria-valuenow.
   *
   * Use when numeric value doesn't convey enough meaning to the user.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext
   *
   * @example
   * <div role="slider"
   *      aria-valuemin="1"
   *      aria-valuemax="7"
   *      aria-valuenow="4"
   *      aria-valuetext="Wednesday">
   */
  "aria-valuetext"?: string;

  // ---------------------------------------------------------------------------
  // Live Region Attributes
  // ---------------------------------------------------------------------------

  /**
   * Indicates an element is being modified and assistive tech should wait.
   *
   * Set to true during updates, false when complete. Prevents premature
   * announcements of partially loaded content.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy
   *
   * @example
   * <div aria-busy="true" aria-live="polite">
   *   Loading search results...
   * </div>
   *
   * @value "true" - Element is being updated
   * @value "false" - No updates in progress (default)
   */
  "aria-busy"?: AriaBoolean;

  /**
   * Indicates that an element will be updated and describes the types of updates.
   *
   * Defines how assistive technologies should handle content changes.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live
   *
   * @example
   * // Polite: wait for user to finish current task
   * <div aria-live="polite">Status updates appear here</div>
   *
   * // Assertive: interrupt user immediately
   * <div aria-live="assertive" role="alert">Critical error!</div>
   *
   * @value "off" - Updates should not be announced (default)
   * @value "polite" - Updates announced at next graceful opportunity
   * @value "assertive" - Updates announced immediately, interrupting user
   */
  "aria-live"?: "off" | "polite" | "assertive";

  /**
   * Indicates what notifications the user agent will trigger when content changes.
   *
   * Space-separated list of notification types.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant
   *
   * @example
   * <ul aria-live="polite" aria-relevant="additions removals">
   *   <!-- List items -->
   * </ul>
   *
   * @value "additions" - Node additions announced
   * @value "removals" - Node removals announced
   * @value "text" - Text changes announced
   * @value "all" - All changes announced
   * @value "additions text" - Default value, additions and text changes
   */
  "aria-relevant"?:
    | "additions"
    | "removals"
    | "text"
    | "all"
    | "additions removals"
    | "additions text"
    | "removals text"
    | "additions removals text";

  /**
   * Indicates whether assistive technologies present all or only parts of changed region.
   *
   * When true, assistive technologies present the entire region as a whole.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic
   *
   * @example
   * // Announce entire region on any change
   * <div aria-live="polite" aria-atomic="true">
   *   <span>Current time:</span>
   *   <span id="clock">12:00</span>
   * </div>
   *
   * @value "true" - Present entire changed region
   * @value "false" - Present only changed nodes (default)
   */
  "aria-atomic"?: AriaBoolean;

  // ---------------------------------------------------------------------------
  // Drag and Drop Attributes (Deprecated but still in spec)
  // ---------------------------------------------------------------------------

  /**
   * Indicates what functions may be performed when a dragged object is released.
   *
   * @deprecated Deprecated in ARIA 1.1. Use native HTML5 drag and drop.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-dropeffect
   *
   * @value "none" - No drop effect
   * @value "copy" - Duplicate of source will be dropped
   * @value "move" - Source will be moved to target
   * @value "link" - Link to source will be created
   * @value "execute" - Execute functionality from source
   * @value "popup" - Popup menu to select drop action
   */
  "aria-dropeffect"?:
    | "none"
    | "copy"
    | "move"
    | "link"
    | "execute"
    | "popup"
    | "copy move"
    | "copy link"
    | "copy execute"
    | "copy popup"
    | "move link"
    | "move execute"
    | "move popup"
    | "link execute"
    | "link popup"
    | "execute popup";

  /**
   * Indicates an element's "grabbed" state in a drag-and-drop operation.
   *
   * @deprecated Deprecated in ARIA 1.1. Use native HTML5 drag and drop.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-grabbed
   *
   * @value "true" - Element has been selected for dragging
   * @value "false" - Element can be grabbed but is not currently grabbed
   * @value undefined - Element is not draggable
   */
  "aria-grabbed"?: AriaBoolean;

  // ---------------------------------------------------------------------------
  // Relationship Attributes
  // ---------------------------------------------------------------------------

  /**
   * Identifies the currently active element when focus is on a composite widget.
   *
   * Used for managing focus within components like combobox, grid, listbox,
   * tree, etc., where DOM focus stays on the container.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant
   *
   * @example
   * <div role="listbox" tabindex="0" aria-activedescendant="option-2">
   *   <div id="option-1" role="option">Option 1</div>
   *   <div id="option-2" role="option">Option 2 (active)</div>
   *   <div id="option-3" role="option">Option 3</div>
   * </div>
   */
  "aria-activedescendant"?: AriaIdRef;

  /**
   * Defines the total number of columns in a table, grid, or treegrid.
   *
   * Use when not all columns are present in the DOM (virtual scrolling).
   * Value of -1 indicates total is unknown.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount
   *
   * @example
   * <table role="grid" aria-colcount="100">
   *   <!-- Only showing columns 1-10 of 100 -->
   * </table>
   */
  "aria-colcount"?: AriaInteger;

  /**
   * Defines an element's column index or position within a table, grid, or treegrid.
   *
   * 1-based index. Use when not all columns are in the DOM.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex
   *
   * @example
   * <td role="gridcell" aria-colindex="5">Cell at column 5</td>
   */
  "aria-colindex"?: AriaInteger;

  /**
   * Defines a human-readable text alternative of aria-colindex.
   *
   * Use when column index number doesn't convey meaningful information.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindextext
   *
   * @example
   * <th aria-colindex="4" aria-colindextext="Q1 2024">Q1 2024</th>
   */
  "aria-colindextext"?: string;

  /**
   * Defines the number of columns spanned by a cell or gridcell.
   *
   * Similar to HTML colspan attribute.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colspan
   *
   * @example
   * <div role="gridcell" aria-colspan="2">Spans 2 columns</div>
   */
  "aria-colspan"?: AriaInteger;

  /**
   * Identifies the element(s) whose contents or presence are controlled by this element.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls
   *
   * @example
   * <button aria-controls="panel1" aria-expanded="false">Show Panel</button>
   * <div id="panel1" hidden>Panel content...</div>
   *
   * // Multiple controls
   * <button aria-controls="tab1 tab2 tab3">Reset All Tabs</button>
   */
  "aria-controls"?: AriaIdRefList;

  /**
   * Indicates the element that represents the current item within a container.
   *
   * Used for navigation breadcrumbs, pagination, step indicators, etc.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-current
   *
   * @example
   * <nav aria-label="Breadcrumb">
   *   <a href="/">Home</a>
   *   <a href="/products">Products</a>
   *   <a href="/products/shoes" aria-current="page">Shoes</a>
   * </nav>
   *
   * @value "page" - Current page within a set of pages
   * @value "step" - Current step within a process
   * @value "location" - Current location within an environment
   * @value "date" - Current date within a collection of dates
   * @value "time" - Current time within a collection of times
   * @value "true" - Current item within a set
   * @value "false" - Not the current item (default)
   */
  "aria-current"?:
    | "page"
    | "step"
    | "location"
    | "date"
    | "time"
    | "true"
    | "false";

  /**
   * Identifies the element(s) that describe the object.
   *
   * Unlike aria-labelledby, this provides supplementary information,
   * not the primary label.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby
   *
   * @example
   * <input type="password"
   *        aria-describedby="password-requirements" />
   * <p id="password-requirements">
   *   Password must be at least 8 characters.
   * </p>
   */
  "aria-describedby"?: AriaIdRefList;

  /**
   * Defines a string value that describes or annotates the current element.
   *
   * Use when visible description text is not available in the DOM.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description
   *
   * @example
   * <button aria-description="Opens in new window">
   *   External Link
   * </button>
   */
  "aria-description"?: string;

  /**
   * Identifies the element(s) that provide additional information related to the object.
   *
   * Similar to aria-describedby but for structured/interactive content
   * like a definition list, table, or extended help.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details
   *
   * @example
   * <img src="chart.png" alt="Sales Chart" aria-details="chart-data" />
   * <table id="chart-data">
   *   <!-- Detailed tabular data for the chart -->
   * </table>
   */
  "aria-details"?: AriaIdRefList;

  /**
   * Identifies the next element(s) in an alternate reading order.
   *
   * Allows assistive technology to override default source order reading.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-flowto
   *
   * @example
   * <article aria-flowto="related-articles">
   *   Main article content...
   * </article>
   * <aside id="related-articles">
   *   Related articles sidebar...
   * </aside>
   */
  "aria-flowto"?: AriaIdRefList;

  /**
   * Identifies the element(s) that label the current element.
   *
   * Preferred over aria-label when visible label text exists in the DOM.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby
   *
   * @example
   * <h2 id="section-title">Contact Information</h2>
   * <form aria-labelledby="section-title">
   *   <!-- Form fields -->
   * </form>
   *
   * // Multiple labels
   * <span id="billing">Billing</span>
   * <span id="name">Name</span>
   * <input aria-labelledby="billing name" />
   */
  "aria-labelledby"?: AriaIdRefList;

  /**
   * Identifies element(s) to define a visual/functional/contextual parent relationship.
   *
   * Use when DOM hierarchy cannot represent the relationship.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns
   *
   * @example
   * // Menu owns items that are outside its DOM subtree
   * <div role="menu" aria-owns="menuitem-1 menuitem-2">
   *   <div role="menuitem">Item in DOM</div>
   * </div>
   * <div id="menuitem-1" role="menuitem">Item outside DOM tree</div>
   * <div id="menuitem-2" role="menuitem">Another outside item</div>
   */
  "aria-owns"?: AriaIdRefList;

  /**
   * Defines an element's number or position in the current set of listitems or treeitems.
   *
   * Use when not all items are present in the DOM (virtual scrolling).
   * 1-based index.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset
   *
   * @example
   * <li role="listitem" aria-posinset="25" aria-setsize="100">
   *   Item 25 of 100
   * </li>
   */
  "aria-posinset"?: AriaInteger;

  /**
   * Defines the total number of rows in a table, grid, or treegrid.
   *
   * Use when not all rows are present in the DOM (virtual scrolling).
   * Value of -1 indicates total is unknown.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount
   *
   * @example
   * <table role="grid" aria-rowcount="5000">
   *   <!-- Showing rows 1-50 of 5000 -->
   * </table>
   */
  "aria-rowcount"?: AriaInteger;

  /**
   * Defines an element's row index or position within a table, grid, or treegrid.
   *
   * 1-based index. Use when not all rows are in the DOM.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex
   *
   * @example
   * <tr aria-rowindex="100">
   *   <td>Row 100 data</td>
   * </tr>
   */
  "aria-rowindex"?: AriaInteger;

  /**
   * Defines a human-readable text alternative of aria-rowindex.
   *
   * Use when row index number doesn't convey meaningful information.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindextext
   *
   * @example
   * <tr aria-rowindex="15" aria-rowindextext="March 15">
   *   <td>Data for March 15</td>
   * </tr>
   */
  "aria-rowindextext"?: string;

  /**
   * Defines the number of rows spanned by a cell or gridcell.
   *
   * Similar to HTML rowspan attribute.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowspan
   *
   * @example
   * <div role="gridcell" aria-rowspan="3">Spans 3 rows</div>
   */
  "aria-rowspan"?: AriaInteger;

  /**
   * Defines the number of items in the current set of listitems or treeitems.
   *
   * Use when not all items are present in the DOM (virtual scrolling).
   * Value of -1 indicates total is unknown.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize
   *
   * @example
   * <li role="listitem" aria-posinset="3" aria-setsize="50">
   *   Item 3 of 50
   * </li>
   */
  "aria-setsize"?: AriaInteger;

  // ---------------------------------------------------------------------------
  // Global Attributes (Additional)
  // ---------------------------------------------------------------------------

  /**
   * Defines a string value that labels the element, intended for Braille.
   *
   * Provides abbreviated or specialized labels optimized for Braille display.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-braillelabel
   *
   * @example
   * <button aria-label="Navigation Menu" aria-braillelabel="Nav">☰</button>
   */
  "aria-braillelabel"?: string;

  /**
   * Defines a human-readable, localized description for the role, for Braille.
   *
   * Abbreviated or specialized role description for Braille displays.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-brailleroledescription
   *
   * @example
   * <div role="slider"
   *      aria-roledescription="Volume Control"
   *      aria-brailleroledescription="Vol">
   */
  "aria-brailleroledescription"?: string;

  /**
   * Indicates keyboard shortcuts that an author has implemented to activate or focus an element.
   *
   * Space-separated list of keyboard shortcuts in format: modifier+key.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-keyshortcuts
   *
   * @example
   * <button aria-keyshortcuts="Alt+S Control+S">Save</button>
   * <a href="#main" aria-keyshortcuts="Alt+M">Skip to main content</a>
   */
  "aria-keyshortcuts"?: string;

  /**
   * Defines a human-readable, author-localized description for the role of an element.
   *
   * Overrides the default role announcement with a custom description.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-roledescription
   *
   * @example
   * <div role="region" aria-roledescription="slide">
   *   Carousel slide content
   * </div>
   */
  "aria-roledescription"?: string;
}

// =============================================================================
// COMPLETE ARIA ATTRIBUTES INTERFACE
// Extends global attributes with all possible ARIA attributes
// =============================================================================

export interface AriaAttributes extends AriaGlobalAttributes {
  /**
   * The ARIA role attribute defines the element's purpose to assistive technologies.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles
   *
   * @example
   * <div role="button">Click me</div>
   * <nav role="navigation">...</nav>
   */
  role?: AriaRole;
}

// =============================================================================
// ARIA ROLES
// =============================================================================

/**
 * All valid ARIA role values.
 *
 * Roles define the type of UI element and how assistive technologies should
 * present and support interaction with it.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles
 */
export type AriaRole =
  // Document Structure Roles
  | "application"
  | "article"
  | "blockquote"
  | "caption"
  | "cell"
  | "code"
  | "columnheader"
  | "definition"
  | "deletion"
  | "directory" // deprecated
  | "document"
  | "emphasis"
  | "feed"
  | "figure"
  | "generic"
  | "group"
  | "heading"
  | "img"
  | "insertion"
  | "list"
  | "listitem"
  | "mark"
  | "math"
  | "meter"
  | "none"
  | "note"
  | "paragraph"
  | "presentation"
  | "row"
  | "rowgroup"
  | "rowheader"
  | "separator"
  | "strong"
  | "subscript"
  | "superscript"
  | "table"
  | "term"
  | "time"
  | "toolbar"
  | "tooltip"
  // Widget Roles
  | "button"
  | "checkbox"
  | "combobox"
  | "grid"
  | "gridcell"
  | "link"
  | "listbox"
  | "menu"
  | "menubar"
  | "menuitem"
  | "menuitemcheckbox"
  | "menuitemradio"
  | "option"
  | "progressbar"
  | "radio"
  | "radiogroup"
  | "scrollbar"
  | "searchbox"
  | "slider"
  | "spinbutton"
  | "switch"
  | "tab"
  | "tablist"
  | "tabpanel"
  | "textbox"
  | "tree"
  | "treegrid"
  | "treeitem"
  // Landmark Roles
  | "banner"
  | "complementary"
  | "contentinfo"
  | "form"
  | "main"
  | "navigation"
  | "region"
  | "search"
  // Live Region Roles
  | "alert"
  | "alertdialog"
  | "log"
  | "marquee"
  | "status"
  | "timer"
  // Window Roles
  | "dialog"
  // Abstract Roles (not for direct use, but listed for completeness)
  | "command"
  | "composite"
  | "input"
  | "landmark"
  | "range"
  | "roletype"
  | "section"
  | "sectionhead"
  | "select"
  | "structure"
  | "widget"
  | "window"
  // Custom/string for extensibility
  | (string & {});

// =============================================================================
// REACT JSX INTRINSIC ELEMENT EXTENSION
// Augment JSX.IntrinsicElements to include ARIA attributes
// =============================================================================

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: AriaAttributes & Record<string, unknown>;
    }
  }
}

// =============================================================================
// HTML ELEMENT ARIA ATTRIBUTE EXTENSION
// For use with vanilla TypeScript DOM manipulation
// =============================================================================

declare global {
  interface HTMLElement {
    ariaActiveDescendant: string | null;
    ariaAtomic: string | null;
    ariaAutoComplete: string | null;
    ariaBrailleLabel: string | null;
    ariaBrailleRoleDescription: string | null;
    ariaBusy: string | null;
    ariaChecked: string | null;
    ariaColCount: string | null;
    ariaColIndex: string | null;
    ariaColIndexText: string | null;
    ariaColSpan: string | null;
    ariaCurrent: string | null;
    ariaDescription: string | null;
    ariaDisabled: string | null;
    ariaExpanded: string | null;
    ariaHasPopup: string | null;
    ariaHidden: string | null;
    ariaInvalid: string | null;
    ariaKeyShortcuts: string | null;
    ariaLabel: string | null;
    ariaLevel: string | null;
    ariaLive: string | null;
    ariaModal: string | null;
    ariaMultiLine: string | null;
    ariaMultiSelectable: string | null;
    ariaOrientation: string | null;
    ariaPlaceholder: string | null;
    ariaPosInSet: string | null;
    ariaPressed: string | null;
    ariaReadOnly: string | null;
    ariaRelevant: string | null;
    ariaRequired: string | null;
    ariaRoleDescription: string | null;
    ariaRowCount: string | null;
    ariaRowIndex: string | null;
    ariaRowIndexText: string | null;
    ariaRowSpan: string | null;
    ariaSelected: string | null;
    ariaSetSize: string | null;
    ariaSort: string | null;
    ariaValueMax: string | null;
    ariaValueMin: string | null;
    ariaValueNow: string | null;
    ariaValueText: string | null;
  }
}

// =============================================================================
// UTILITY TYPES
// =============================================================================

/**
 * Helper type to make all ARIA attributes optional and typed.
 * Useful when creating component prop types.
 *
 * @example
 * interface ButtonProps extends WithAriaAttributes {
 *   onClick: () => void;
 *   children: React.ReactNode;
 * }
 */
export type WithAriaAttributes = Partial<AriaAttributes>;

/**
 * Extract only the ARIA-specific attributes from a props object.
 *
 * @example
 * type ButtonAriaProps = PickAriaAttributes<ButtonProps>;
 */
export type PickAriaAttributes<T> = {
  [K in keyof T as K extends `aria-${string}` | "role" ? K : never]: T[K];
};

/**
 * Remove all ARIA attributes from a props object.
 *
 * @example
 * type ButtonNonAriaProps = OmitAriaAttributes<ButtonProps>;
 */
export type OmitAriaAttributes<T> = {
  [K in keyof T as K extends `aria-${string}` | "role" ? never : K]: T[K];
};

export default AriaAttributes;
