"use strict";
var plugins = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // plugin.js
  var plugin_exports = {};
  __export(plugin_exports, {
    Plugin: () => Plugin
  });

  // ../../shared/settings-ui/tokens.css
  var tokens_default = "/*\n * Thymer Plugin Settings UI \u2014 Design Tokens\n *\n * Canonical CSS custom properties for the plugin settings panel system.\n * Plugins consume this verbatim; component CSS reads from these vars.\n *\n * See shared/settings-ui/DESIGN.md for rationale.\n *\n * Thymer var names verified against library/css-tokens/ (ripped from shipped CSS).\n * Fallbacks use color-mix(currentColor) so panels work when a token is absent.\n */\n\n.tps-panel {\n  /* \u2500\u2500 Color: text \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  --tps-text:           var(--text-default,   currentColor);\n  --tps-text-muted:     var(--text-muted,     color-mix(in srgb, currentColor 62%, transparent));\n  --tps-text-faint:     var(--text-subtle,    color-mix(in srgb, currentColor 48%, transparent));\n  --tps-text-whisper:   var(--text-disabled,  color-mix(in srgb, currentColor 34%, transparent));\n\n  /* \u2500\u2500 Color: surfaces \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  --tps-bg-input:       var(--input-bg-color,\n                        color-mix(in srgb, currentColor 6%, transparent));\n  --tps-bg-hover:       var(--hover-subtle,\n                        var(--sidebar-bg-hover,\n                        color-mix(in srgb, currentColor 8%, transparent)));\n  --tps-bg-active:      var(--active-bg-color,\n                        color-mix(in srgb, currentColor 12%, transparent));\n\n  /* \u2500\u2500 Color: borders / dividers \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  --tps-divider:        var(--divider-color,\n                        var(--thin-divider-color,\n                        color-mix(in srgb, currentColor 14%, transparent)));\n  --tps-border:         var(--input-border-color,\n                        var(--divider-color,\n                        color-mix(in srgb, currentColor 22%, transparent)));\n  --tps-border-strong:  var(--titlebar-border-color,\n                        var(--selection-border,\n                        color-mix(in srgb, currentColor 32%, transparent)));\n\n  /* \u2500\u2500 Color: accent (Thymer uses --logo-color) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  --tps-accent:         var(--logo-color, currentColor);\n  --tps-accent-soft:    color-mix(in srgb, var(--tps-accent) 15%, transparent);\n  --tps-accent-strong:  color-mix(in srgb, var(--tps-accent) 80%, var(--tps-text));\n\n  /* \u2500\u2500 Color: semantic \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  --tps-danger:         var(--enum-red-fg, #ef4444);\n  --tps-danger-soft:    color-mix(in srgb, var(--tps-danger) 15%, transparent);\n  --tps-warning:        var(--text-warning,\n                        var(--enum-yellow-fg, #f59e0b));\n  --tps-success:        var(--enum-green-fg, #10b981);\n  --tps-success-soft:   color-mix(in srgb, var(--tps-success) 12%, transparent);\n\n  --tps-on-accent:      var(--text-on-accent, light-dark(#111111, #fafafa));\n\n  /* Panel chrome */\n  --tps-panel-bg:       var(--panel-bg-color, transparent);\n  --tps-swatch-inset:   color-mix(in srgb, var(--tps-text) 8%, transparent);\n\n  /* \u2500\u2500 Typography \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  /* Font is INHERITED from Thymer's panel chrome (see components.css). */\n\n  --tps-fs-title:       18px;\n  --tps-fs-lede:        13px;\n  --tps-fs-section:     11px;\n  --tps-fs-hint:        12px;\n  --tps-fs-label:       13px;\n  --tps-fs-desc:        12px;\n  --tps-fs-body:        13px;\n  --tps-fs-value:       12px;\n  --tps-fs-button:      12px;\n  --tps-fs-list-header: 10px;\n\n  --tps-lh-tight:       1;\n  --tps-lh-snug:        1.2;\n  --tps-lh-base:        1.4;\n  --tps-lh-loose:       1.5;\n\n  --tps-fw-regular:     400;\n  --tps-fw-medium:      500;\n  --tps-fw-semibold:    600;\n  --tps-fw-bold:        700;\n\n  --tps-ls-section:     0.06em;\n  --tps-ls-list:        0.08em;\n  --tps-ls-title:       0;\n\n  /* \u2500\u2500 Spacing (8px scale) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  --tps-space-1:        4px;\n  --tps-space-2:        8px;\n  --tps-space-3:        12px;\n  --tps-space-4:        16px;\n  --tps-space-5:        24px;\n  --tps-space-6:        32px;\n  --tps-space-7:        48px;\n\n  /* \u2500\u2500 Radii \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  --tps-radius-sm:      4px;\n  --tps-radius-md:      6px;\n  --tps-radius-lg:      8px;\n  --tps-radius-pill:    999px;\n  --tps-radius-circle:  50%;\n\n  /* \u2500\u2500 Motion \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  --tps-ease-out:       cubic-bezier(0.2, 0.6, 0.2, 1);\n  --tps-ease-in-out:    cubic-bezier(0.4, 0, 0.2, 1);\n  --tps-dur-fast:       80ms;\n  --tps-dur-base:       160ms;\n\n  --tps-shadow-thumb:   0 1px 3px color-mix(in srgb, var(--tps-text) 28%, transparent);\n\n  /* \u2500\u2500 Component dimensions \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  --tps-control-h-sm:   28px;\n  --tps-control-h-md:   32px;\n  --tps-input-w:        64px;\n  --tps-num-step-w:     28px;\n  --tps-swatch-size:    22px;\n  --tps-thumb-size:     16px;\n  --tps-track-h:        6px;\n\n  --tps-slider-track:   color-mix(in srgb, var(--tps-text) 22%, transparent);\n  --tps-slider-thumb-border: color-mix(in srgb, var(--tps-text) 28%, transparent);\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .tps-panel {\n    --tps-dur-fast:     1ms;\n    --tps-dur-base:     1ms;\n  }\n}\n";

  // ../../shared/settings-ui/components.css
  var components_default = `/*
 * Thymer Plugin Panel \u2014 Component Primitives
 *
 * All primitives scope under .tps-panel. Plugin-specific styles live elsewhere.
 * Reads tokens from tokens.css.
 */

/* \u2500\u2500 Panel root \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* Inherit Thymer's font + sizing \u2014 DO NOT override. plugin-collection-icons
   demonstrates the right approach: simply \`font-family: inherit\`. Forcing a
   custom var fights both Thymer's body font AND the .ti icon font. */
.tps-panel {
  font-family: inherit;
  font-size: var(--tps-fs-body);
  line-height: var(--tps-lh-base);
  color: var(--tps-text);
  padding: 0 var(--tps-space-5) var(--tps-space-7);
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow: auto;
}

.tps-panel *,
.tps-panel *::before,
.tps-panel *::after {
  box-sizing: border-box;
}

/* Mono opt-ins are explicit per-element, never via a panel-wide override. */
.tps-panel .tps-num-input,
.tps-panel .tps-slider-value,
.tps-panel .tps-mono,
.tps-panel .tps-mono * {
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Courier New", monospace;
}

/* \u2500\u2500 Title block \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-title {
  font-size: var(--tps-fs-title);
  line-height: var(--tps-lh-snug);
  font-weight: var(--tps-fw-semibold);
  letter-spacing: var(--tps-ls-title);
  color: var(--tps-text);
  margin: 0 0 var(--tps-space-1);
}

.tps-lede {
  font-size: var(--tps-fs-lede);
  line-height: var(--tps-lh-loose);
  color: var(--tps-text-muted);
  margin: 0 0 var(--tps-space-3);
}

/* \u2500\u2500 Canonical plugin header \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-plugin-header {
  position: relative;
  margin: var(--tps-space-5) 0 var(--tps-space-5);
  padding: 18px var(--tps-space-4);
  overflow: hidden;
  background:
    linear-gradient(to right,
      #f26548  8%, #f26548 28%,
      #fbac56 28%, #fbac56 48%,
      #fff460 48%, #fff460 68%,
      #f067a6 68%, #f067a6 88%,
      #03bdf2 88%
    ) top left / 100% 1px no-repeat,
    linear-gradient(to right,
      #f26548  0%, #f26548 12%,
      #fbac56 12%, #fbac56 32%,
      #fff460 32%, #fff460 52%,
      #f067a6 52%, #f067a6 72%,
      #03bdf2 72%, #03bdf2 92%
    ) bottom left / 100% 1px no-repeat,
    var(--tps-panel-bg, var(--panel-bg-color, var(--plg-ci-theme-bg, transparent)));
  border-left: 1px solid #f26548;
  border-right: 1px solid #03bdf2;
}

.tps-plugin-header-logo {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--tps-space-2, 8px);
  margin: 0 0 var(--tps-space-3, 12px);
  background: var(--tps-bg-hover);
  border-radius: var(--tps-radius-md, 6px);
}

.tps-plugin-header-logo-icon {
  flex: 0 0 auto;
  font-size: 34px;
  line-height: 1;
  color: var(--tps-text, currentColor);
}

.tps-plugin-header-title {
  font-size: 22px;
  line-height: var(--tps-lh-snug, 1.2);
  font-weight: var(--tps-fw-semibold, 600);
  letter-spacing: 0;
  color: var(--tps-text, var(--text-default, currentColor));
  margin: 0 0 var(--tps-space-3, 12px);
}

.tps-plugin-header-version {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: baseline;
  align-self: baseline;
  font-size: 11px;
  line-height: inherit;
  font-weight: var(--tps-fw-medium, 500);
  letter-spacing: 0;
  color: var(--tps-text-faint) !important;
  white-space: nowrap;
}

.tps-plugin-header-lede {
  font-size: 14px;
  line-height: var(--tps-lh-base, 1.4);
  color: var(--tps-text-muted);
  margin: 0 0 var(--tps-space-3, 12px);
}

.tps-plugin-header-helper-wrap {
  margin: 0 0 var(--tps-space-3, 12px);
}

.tps-plugin-header-helper-toggle {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 0;
  margin: 0;
  border: 0;
  background: transparent;
  color: inherit;
  opacity: 0.28;
  font: inherit;
  font-size: var(--tps-fs-section, 11px);
  font-weight: var(--tps-fw-semibold, 600);
  line-height: var(--tps-lh-tight, 1);
  letter-spacing: var(--tps-ls-section, 0.06em);
  text-transform: uppercase;
  cursor: pointer;
  transition: opacity var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out);
}

.tps-plugin-header-helper-toggle:hover {
  opacity: 0.72;
}

.tps-plugin-header-helper-toggle:focus-visible {
  outline: 1px solid color-mix(in srgb, var(--tps-accent, currentColor) 45%, transparent);
  outline-offset: 2px;
}

.tps-plugin-header-helper-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 13px;
  height: 13px;
  font-size: 13px;
  line-height: 1;
  color: inherit;
}

.tps-plugin-header-helper-wrap[data-open="true"] .tps-plugin-header-helper-toggle {
  opacity: 0.72;
}

.tps-plugin-header-helper-wrap[data-open="true"] .tps-plugin-header-helper-toggle:hover {
  opacity: 1;
}

.tps-plugin-header-helper-body {
  display: none;
  margin: 8px 0 0;
  padding-left: 18px;
}

.tps-plugin-header-helper-wrap[data-open="true"] .tps-plugin-header-helper-body {
  display: block;
  cursor: pointer;
}

.tps-plugin-header-helper-line {
  margin: 0;
  font-size: var(--tps-fs-hint, 12px);
  line-height: var(--tps-lh-base, 1.4);
  color: inherit;
  opacity: 0.72;
  transition: opacity var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out);
}

.tps-plugin-header-helper-wrap[data-open="true"] .tps-plugin-header-helper-body:hover .tps-plugin-header-helper-line {
  opacity: 1;
}

.tps-plugin-header-attr {
  position: relative;
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 0;
  width: 100%;
  font-size: 11.5px;
  line-height: var(--tps-lh-base, 1.4);
  color: var(--tps-text-muted);
  margin: var(--tps-space-3, 12px) 0 0;
  padding-top: var(--tps-space-3, 12px);
  border-top: 0;
}

.tps-plugin-header-attr::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: clamp(40%, 50%, 55%);
  height: 1px;
  background: var(--tps-bg-hover);
}

.tps-plugin-header-link-group + .tps-plugin-header-link-group {
  margin-left: var(--tps-space-3, 12px);
  padding-left: var(--tps-space-3, 12px);
  border-left: 1px solid var(--tps-bg-hover);
}

.tps-plugin-header-icon,
.tps-plugin-header-attr .ti {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  width: 12px;
  height: 12px;
  font-size: 12px;
  line-height: 1;
  color: var(--tps-text-muted);
  transform: translateY(2px);
  margin-right: var(--tps-space-1, 4px);
}

.tps-plugin-header-iconify {
  background-color: currentColor;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
}

.tps-plugin-header-iconify-github {
  --tps-iconify-github: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='black' d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'/%3E%3C/svg%3E");
  -webkit-mask-image: var(--tps-iconify-github);
  mask-image: var(--tps-iconify-github);
}

.tps-plugin-header-link {
  color: inherit;
  text-decoration: underline;
  text-decoration-color: color-mix(in srgb, currentColor 42%, transparent);
  transition: color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out),
              text-decoration-color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out),
              filter var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out);
}

.tps-plugin-header-link--blue,
.tps-plugin-header-link--blue:hover {
  color: #03bdf2;
  text-decoration-color: #03bdf2;
}

.tps-plugin-header-link--pink,
.tps-plugin-header-link--pink:hover {
  color: #f067a6;
  text-decoration-color: #f067a6;
}

.tps-plugin-header-link--muted,
.tps-plugin-header-link--muted:hover {
  color: var(--tps-text-faint) !important;
  text-decoration-color: color-mix(in srgb, currentColor 42%, transparent);
}

.tps-plugin-header-link:hover {
  text-decoration: none;
  text-decoration-color: transparent;
  filter: brightness(1.2);
}

/* \u2500\u2500 Section \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-section {
  padding: 0;
}

.tps-section + .tps-section {
  border-top: 1px solid var(--tps-divider);
  margin-top: var(--tps-space-4);
  padding-top: var(--tps-space-4);
}

.tps-section-label {
  display: block;
  font-size: var(--tps-fs-section);
  line-height: var(--tps-lh-tight);
  font-weight: var(--tps-fw-semibold);
  letter-spacing: var(--tps-ls-section);
  text-transform: uppercase;
  color: var(--tps-text-muted);
  margin: 0 0 var(--tps-space-2);
}

.tps-section-hint {
  font-size: var(--tps-fs-hint);
  line-height: var(--tps-lh-base);
  color: var(--tps-text-muted);
  margin: 0 0 var(--tps-space-3);
}

.tps-section-body {
  display: flex;
  flex-direction: column;
  gap: var(--tps-space-3);
  margin-top: var(--tps-space-2);
}

.tps-section-body:first-child {
  margin-top: 0;
}

/* When the body is full of list rows (mode rows), drop the gap and the top
   margin entirely so the first row's hover background sits flush under the
   section label and adjacent rows tile with no dead space between them. */
.tps-section-body:has(> .tps-list-row),
.tps-section-body:has(> .tps-opt) {
  margin-top: 0;
  gap: 0;
}

/* Collapsible variant: header is a button, body is hidden when closed */

.tps-section--collapsible > .tps-section-header {
  display: flex;
  align-items: center;
  gap: var(--tps-space-2);
  width: 100%;
  min-height: 34px;
  padding: 0;
  margin: 0 0 var(--tps-space-2);
  background: transparent;
  border: 0;
  color: inherit;
  font: inherit;
  text-align: left;
  cursor: pointer;
}

.tps-section--collapsible > .tps-section-header:hover .tps-section-label {
  color: var(--tps-text);
}

.tps-section--collapsible > .tps-section-header .tps-section-label {
  margin: 0;
}

.tps-section-chev {
  display: inline-block;
  width: 10px;
  font-size: 10px;
  line-height: 1;
  color: var(--tps-text-faint);
  transition: transform var(--tps-dur-base) var(--tps-ease-out);
}

.tps-section--collapsible[data-open="true"] .tps-section-chev {
  transform: rotate(90deg);
}

.tps-section-summary {
  margin-left: auto;
  min-width: 0;
  min-height: 18px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: var(--tps-fs-hint);
  color: var(--tps-text-muted);
  font-weight: var(--tps-fw-regular);
  letter-spacing: 0;
  text-transform: none;
}

/* Reserve header height when expanded; summary text only shows collapsed */
.tps-section--collapsible[data-open="true"] .tps-section-summary {
  visibility: hidden;
}

.tps-section--collapsible[data-open="false"] > .tps-section-body {
  display: none;
}

/* \u2500\u2500 Option row (checkbox / radio + label + desc) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-opt {
  display: grid;
  grid-template-columns: 18px 1fr;
  column-gap: var(--tps-space-3);
  row-gap: 0;
  align-items: start;
  padding: 6px 10px;
  margin: 0 -10px;
  border-radius: var(--tps-radius-md);
  cursor: pointer;
  transition: background-color var(--tps-dur-fast) var(--tps-ease-out);
}

/* Stack option rows tight so the hover background of one meets the next
   without a visible gap above. Outer section gap is handled by the section
   itself, not by spacing between opts. */
.tps-section-body > .tps-opt + .tps-opt {
  margin-top: 0;
}
.tps-section-body:has(> .tps-opt) {
  gap: 0;
}

.tps-opt:hover {
  background: var(--tps-bg-hover);
}

.tps-opt > input[type="checkbox"],
.tps-opt > input[type="radio"] {
  grid-column: 1;
  grid-row: 1;
  align-self: center;
  width: 16px;
  height: 16px;
  margin: 0;
  accent-color: var(--tps-accent);
  cursor: pointer;
}

.tps-opt > .tps-opt-label {
  grid-column: 2;
  grid-row: 1;
  font-size: var(--tps-fs-label);
  line-height: var(--tps-lh-base);
  font-weight: var(--tps-fw-medium);
  color: var(--tps-text);
  cursor: pointer;
  transition: color var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-opt > .tps-opt-desc {
  grid-column: 2;
  grid-row: 2;
  margin-top: 1px;
  font-size: var(--tps-fs-desc);
  line-height: var(--tps-lh-base);
  color: var(--tps-text-muted);
  cursor: pointer;
}

.tps-section-body > .tps-opt-note {
  margin: var(--tps-space-2) -10px 0;
  padding: 0 10px 0 calc(10px + 18px + var(--tps-space-3));
  font-size: var(--tps-fs-desc);
  line-height: var(--tps-lh-base);
  color: var(--tps-text-muted);
}

.tps-opt > input:checked ~ .tps-opt-label {
  color: var(--tps-accent);
}

/* Checkbox option + nested number row (e.g. tuned value under a toggle) */
.tps-section-body:has(> .tps-opt-group) {
  margin-top: 0;
  gap: 0;
}

.tps-opt-group {
  display: flex;
  flex-direction: column;
}

.tps-opt-group + .tps-opt-group {
  margin-top: 0;
}

.tps-opt-group .tps-opt-group__value,
.tps-opt-group > .tps-num {
  margin-left: calc(18px + var(--tps-space-3));
  margin-top: var(--tps-space-1);
  margin-bottom: var(--tps-space-3);
  padding-right: 10px;
  max-width: 100%;
  box-sizing: border-box;
}

.tps-opt-group .tps-num-grid {
  margin-left: calc(18px + var(--tps-space-3));
  margin-top: var(--tps-space-1);
  margin-bottom: var(--tps-space-3);
  grid-template-columns: minmax(0, 1fr);
}

/* \u2500\u2500 Numeric stepper \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-num {
  display: flex;
  align-items: center;
  gap: var(--tps-space-1);
}

.tps-num-label {
  flex: 0 0 auto;
  min-width: 0;
  font-size: var(--tps-fs-label);
  color: var(--tps-text);
  margin-right: var(--tps-space-2);
}

.tps-num-step,
.tps-num-input,
.tps-num-reset {
  font-family: inherit;
  font-size: var(--tps-fs-button);
  height: var(--tps-control-h-sm);
  border: 1px solid var(--tps-divider);
  border-radius: var(--tps-radius-sm);
  background: transparent;
  color: var(--tps-text);
  transition: border-color var(--tps-dur-fast) var(--tps-ease-out),
              background-color var(--tps-dur-fast) var(--tps-ease-out),
              color var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-num-step {
  width: var(--tps-num-step-w);
  font-size: 14px;
  line-height: 1;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.tps-num-step:hover {
  border-color: var(--tps-border);
  background: var(--tps-bg-hover);
}

.tps-num-step:active {
  background: var(--tps-bg-active);
}

.tps-num-input {
  width: var(--tps-input-w);
  padding: 0 var(--tps-space-2);
  background: var(--tps-bg-input);
  text-align: center;
  font-variant-numeric: tabular-nums;
  -moz-appearance: textfield;
}

.tps-num-input::-webkit-outer-spin-button,
.tps-num-input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.tps-num-input:focus {
  outline: none;
  border-color: var(--tps-accent);
}

.tps-num-unit {
  font-size: var(--tps-fs-hint);
  color: var(--tps-text-muted);
  margin: 0 var(--tps-space-2);
}

.tps-num-reset {
  font-size: 11px;
  color: var(--tps-text-muted);
  padding: 0 var(--tps-space-2);
  cursor: pointer;
}

.tps-num-reset:hover {
  color: var(--tps-text);
  border-color: var(--tps-border);
}

.tps-num-reset[hidden] {
  display: none !important;
}

/* Stacked layout: label / control row in a 200px / 1fr grid */

.tps-num-grid {
  display: grid;
  grid-template-columns: 200px 1fr;
  align-items: center;
  column-gap: var(--tps-space-3);
  row-gap: var(--tps-space-2);
}

.tps-num-grid > .tps-num-label {
  margin: 0;
  text-align: left;
}

.tps-num-grid > .tps-num {
  justify-self: start;
}

/* \u2500\u2500 Slider row \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* Shared range styling for sliderRow and any other range input in a panel.
   Exclude hue pickers that paint their own gradient track. */
.tps-panel input[type="range"]:not(.plg-collection-colors__hue) {
  width: 100%;
  height: 22px;
  appearance: none;
  -webkit-appearance: none;
  background: transparent;
  outline: none;
  cursor: pointer;
  touch-action: pan-y;
}

.tps-panel input[type="range"]:not(.plg-collection-colors__hue)::-webkit-slider-runnable-track {
  height: var(--tps-track-h);
  border-radius: 3px;
  background: var(--tps-slider-track);
}

.tps-panel input[type="range"]:not(.plg-collection-colors__hue)::-moz-range-track {
  height: var(--tps-track-h);
  border-radius: 3px;
  background: var(--tps-slider-track);
}

.tps-panel input[type="range"]:not(.plg-collection-colors__hue)::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: var(--tps-thumb-size);
  height: var(--tps-thumb-size);
  border-radius: var(--tps-radius-circle);
  background: var(--tps-accent);
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
  margin-top: -5px;
}

.tps-panel input[type="range"]:not(.plg-collection-colors__hue)::-moz-range-thumb {
  width: var(--tps-thumb-size);
  height: var(--tps-thumb-size);
  border-radius: var(--tps-radius-circle);
  background: var(--tps-accent);
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
}

.tps-panel input[type="range"]:not(.plg-collection-colors__hue):active::-webkit-slider-thumb {
  cursor: grabbing;
}

.tps-slider {
  display: grid;
  grid-template-columns: 90px 1fr 56px auto;
  align-items: center;
  gap: var(--tps-space-3);
}

.tps-slider-label {
  font-size: var(--tps-fs-section);
  font-weight: var(--tps-fw-semibold);
  letter-spacing: var(--tps-ls-section);
  text-transform: uppercase;
  color: var(--tps-text-muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tps-slider-input {
  width: 100%;
  height: 22px;
  appearance: none;
  -webkit-appearance: none;
  background: transparent;
  outline: none;
  cursor: pointer;
  touch-action: pan-y;
}

.tps-slider-input::-webkit-slider-runnable-track {
  height: var(--tps-track-h);
  border-radius: 3px;
  background: var(--tps-slider-track);
}

.tps-slider-input::-moz-range-track {
  height: var(--tps-track-h);
  border-radius: 3px;
  background: var(--tps-slider-track);
}

.tps-slider-input::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: var(--tps-thumb-size);
  height: var(--tps-thumb-size);
  border-radius: var(--tps-radius-circle);
  background: var(--tps-accent);
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
  margin-top: -5px;
}

.tps-slider-input::-moz-range-thumb {
  width: var(--tps-thumb-size);
  height: var(--tps-thumb-size);
  border-radius: var(--tps-radius-circle);
  background: var(--tps-accent);
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
}

.tps-slider-input:active::-webkit-slider-thumb {
  cursor: grabbing;
}

/* Hue picker keeps its gradient track; only style the thumb. */
.tps-panel input[type="range"].plg-collection-colors__hue {
  width: 100%;
  height: 10px;
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;
}

.tps-panel input[type="range"].plg-collection-colors__hue::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 14px;
  height: 14px;
  border-radius: var(--tps-radius-circle);
  background: var(--panel-bg-color, var(--tps-panel-bg, currentColor));
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
}

.tps-panel input[type="range"].plg-collection-colors__hue::-moz-range-thumb {
  width: 14px;
  height: 14px;
  border-radius: var(--tps-radius-circle);
  background: var(--panel-bg-color, var(--tps-panel-bg, currentColor));
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
}

.tps-slider-value {
  font-family: var(--tps-font-mono);
  font-size: var(--tps-fs-value);
  color: var(--tps-text);
  text-align: right;
  font-variant-numeric: tabular-nums;
}

/* \u2500\u2500 Swatch + grid \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-swatch-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, var(--tps-swatch-size));
  gap: var(--tps-space-2) 6px;
}

.tps-swatch {
  width: var(--tps-swatch-size);
  height: var(--tps-swatch-size);
  border-radius: var(--tps-radius-circle);
  border: 0;
  padding: 0;
  cursor: pointer;
  outline: none;
  box-shadow: inset 0 0 0 1px var(--tps-swatch-inset);
  transition: transform var(--tps-dur-fast) var(--tps-ease-out),
              box-shadow var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-swatch:hover {
  transform: scale(1.1);
}

.tps-swatch[aria-pressed="true"] {
  box-shadow: 0 0 0 2px var(--tps-accent);
}

/* \u2500\u2500 List rows \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-list {
  display: flex;
  flex-direction: column;
}

.tps-list-header {
  display: grid;
  grid-template-columns: 18px 1fr auto;
  align-items: center;
  gap: var(--tps-space-3);
  padding: var(--tps-space-2) var(--tps-space-3);
  border-bottom: 1px solid var(--tps-divider);
  font-size: var(--tps-fs-list-header);
  font-weight: var(--tps-fw-bold);
  letter-spacing: var(--tps-ls-list);
  text-transform: uppercase;
  color: var(--tps-text-faint);
}

.tps-list-row {
  display: grid;
  grid-template-columns: 18px 1fr auto;
  align-items: center;
  gap: var(--tps-space-3);
  padding: var(--tps-space-2) var(--tps-space-3);
  border-bottom: 1px solid var(--tps-divider);
  transition: background-color var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-list-row:last-child {
  border-bottom: 0;
}

.tps-list-row:hover {
  background: var(--tps-bg-hover);
}

.tps-list-name {
  font-size: var(--tps-fs-label);
  color: var(--tps-text);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* \u2500\u2500 Tabs / segmented control \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-tabs {
  display: inline-flex;
  align-items: center;
  gap: var(--tps-space-1);
  padding: 0;
}

.tps-tab {
  height: var(--tps-control-h-sm);
  padding: 0 var(--tps-space-2);
  font-family: inherit;
  font-size: var(--tps-fs-button);
  font-weight: var(--tps-fw-medium);
  color: var(--tps-text-muted);
  background: transparent;
  border: 1px solid transparent;
  border-radius: var(--tps-radius-sm);
  cursor: pointer;
  transition: background-color var(--tps-dur-fast) var(--tps-ease-out),
              border-color var(--tps-dur-fast) var(--tps-ease-out),
              color var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-tab:hover {
  background: var(--tps-bg-hover);
  color: var(--tps-text);
}

.tps-tab[aria-pressed="true"],
.tps-tab[aria-selected="true"] {
  background: var(--tps-accent-soft);
  color: var(--tps-accent);
  border-color: color-mix(in srgb, var(--tps-accent) 50%, transparent);
}

/* \u2500\u2500 Buttons \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--tps-space-1);
  height: var(--tps-control-h-sm);
  padding: 0 var(--tps-space-3);
  font-family: inherit;
  font-size: var(--tps-fs-button);
  font-weight: var(--tps-fw-medium);
  border-radius: var(--tps-radius-sm);
  border: 1px solid transparent;
  cursor: pointer;
  transition: background-color var(--tps-dur-fast) var(--tps-ease-out),
              border-color var(--tps-dur-fast) var(--tps-ease-out),
              color var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-button--md { height: var(--tps-control-h-md); padding: 0 var(--tps-space-4); }

.tps-button--primary {
  background: var(--tps-accent);
  color: var(--tps-on-accent);
}

.tps-button--primary:hover {
  filter: brightness(1.08);
}

.tps-button--ghost {
  background: transparent;
  border-color: var(--tps-divider);
  color: var(--tps-text);
}

.tps-button--ghost:hover {
  background: var(--tps-bg-hover);
  border-color: var(--tps-border);
}

.tps-button--danger {
  background: transparent;
  border-color: var(--tps-divider);
  color: var(--tps-text-muted);
}

.tps-button--danger:hover {
  background: var(--tps-danger-soft);
  border-color: color-mix(in srgb, var(--tps-danger) 40%, transparent);
  color: var(--tps-danger);
}

/* \u2500\u2500 Focus rings (custom controls only \u2014 native inputs use accent-color) \u2500 */

.tps-tab:focus-visible,
.tps-button:focus-visible,
.tps-num-step:focus-visible,
.tps-num-reset:focus-visible,
.tps-swatch:focus-visible {
  outline: 2px solid var(--tps-accent);
  outline-offset: 2px;
}

/* \u2500\u2500 Inset card variant (rare \u2014 for palette-picker body, etc.) \u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-card {
  padding: var(--tps-space-3);
  border-radius: var(--tps-radius-lg);
  background: var(--tps-bg-input);
  border: 1px solid var(--tps-divider);
}
`;

  // ../../shared/settings-ui/color-field.css
  var color_field_default = `/*
 * colorField \u2014 shared color picker (Theme | Tailwind | Custom).
 * Scoped under .tps-panel .tps-color-field; styled through --tps-* tokens.
 * Every selectable swatch is the same .tps-cf-dot across all three tabs.
 */

.tps-panel .tps-color-field { display: block; }

/* \u2500\u2500 Tabs \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-tabs {
  display: grid; grid-auto-flow: column; grid-auto-columns: 1fr; gap: 4px;
  background: var(--tps-bg-input, rgba(127,127,127,0.06));
  border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  border-radius: var(--tps-radius-md, 8px);
  padding: 4px; margin-bottom: var(--tps-space-3, 12px);
}
.tps-panel .tps-cf-tab {
  cursor: pointer; border: 0; background: transparent;
  border-radius: var(--tps-radius-sm, 6px); padding: 8px 10px; font: inherit;
  font-size: var(--tps-fs-body, 13px); font-weight: var(--tps-fw-semibold, 600);
  color: var(--tps-text-muted, rgba(127,127,127,0.75));
  transition: background var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease),
              color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease);
}
.tps-panel .tps-cf-tab:hover { color: var(--tps-text, inherit); }
.tps-panel .tps-cf-tab.is-active {
  background: var(--tps-panel-bg, var(--bg-default, #fff));
  color: var(--tps-text, inherit); box-shadow: 0 1px 2px rgba(0,0,0,0.12);
}

/* \u2500\u2500 Panes \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-pane { display: none; }
.tps-panel .tps-cf-pane.is-active { display: block; }

/* \u2500\u2500 Featured theme picks \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-featured {
  display: grid; grid-template-columns: 1fr 1fr; gap: 8px;
  margin-bottom: var(--tps-space-3, 12px);
}
.tps-panel .tps-cf-tile {
  display: flex; align-items: center; gap: 10px; width: 100%; text-align: left; cursor: pointer;
  background: var(--tps-bg-hover, rgba(127,127,127,0.04));
  border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  border-radius: var(--tps-radius-md, 8px); padding: 10px 12px; color: var(--tps-text, inherit);
  transition: border-color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease),
              background var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease);
}
.tps-panel .tps-cf-tile:hover { border-color: var(--tps-border-strong, rgba(127,127,127,0.28)); }
.tps-panel .tps-cf-tile.is-sel {
  border-color: var(--tps-accent, currentColor);
  background: var(--tps-accent-soft, rgba(127,127,127,0.08));
}
.tps-panel .tps-cf-tile-dot {
  width: 22px; height: 22px; flex: 0 0 auto; border-radius: var(--tps-radius-sm, 6px);
  box-shadow: inset 0 0 0 1px var(--tps-swatch-inset, rgba(127,127,127,0.18));
}
.tps-panel .tps-cf-tile-label {
  font-size: var(--tps-fs-body, 13px); font-weight: var(--tps-fw-semibold, 600);
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}

/* \u2500\u2500 Groups + the universal swatch dot \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-group { margin-bottom: var(--tps-space-3, 12px); }
.tps-panel .tps-cf-group-head { display: flex; align-items: baseline; gap: 8px; margin-bottom: var(--tps-space-2, 8px); }
.tps-panel .tps-cf-group-label {
  font-size: var(--tps-fs-section, 11px); letter-spacing: 0.06em; text-transform: uppercase;
  color: var(--tps-text-faint, var(--tps-text-muted, rgba(127,127,127,0.6))); font-weight: var(--tps-fw-semibold, 600);
}
.tps-panel .tps-cf-group-hint { font-size: var(--tps-fs-section, 11px); color: var(--tps-text-faint, rgba(127,127,127,0.5)); }

/* \u2500\u2500 Swatches: square dots that fill the row width (22 across in the Tailwind
 *    hue row); every swatch elsewhere matches that width. \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-dots {
  display: grid; grid-template-columns: repeat(22, minmax(0, 1fr)); gap: 5px;
  /* explicit resets so a stale accumulated .tps-cf-dots rule (old edge-to-edge
   * build injected an inset-ring outline) can't linger after a plugin reload. */
  border: 0; border-radius: 0; overflow: visible; box-shadow: none; background: none; padding: 0;
}
.tps-panel .tps-cf-dot {
  aspect-ratio: 1 / 1; min-width: 0; width: 100%; height: auto; border: 0; padding: 0; margin: 0;
  cursor: pointer; position: relative;
  border-radius: var(--tps-radius-sm, 6px);
  box-shadow: inset 0 0 0 1px var(--tps-swatch-inset, rgba(127,127,127,0.18));
  transition: transform var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease),
              box-shadow var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease);
}
.tps-panel .tps-cf-dot:hover { transform: scale(1.12); z-index: 3; }
.tps-panel .tps-cf-dot:focus-visible,
.tps-panel .tps-cf-dot.is-sel,
.tps-panel .tps-cf-dot.is-active {
  outline: none; z-index: 4;
  box-shadow: inset 0 0 0 1px var(--tps-swatch-inset, rgba(127,127,127,0.18)),
              0 0 0 2px var(--tps-panel-bg, #fff), 0 0 0 4px var(--tps-accent, currentColor);
}

/* \u2500\u2500 Lightness "tints": full-width ramp, shade number inside (do not touch) \u2500 */
.tps-panel .tps-cf-ramp {
  display: grid; grid-template-columns: repeat(11, minmax(0, 1fr));
  border-radius: var(--tps-radius-md, 8px); overflow: hidden;
  box-shadow: inset 0 0 0 1px var(--tps-border, rgba(127,127,127,0.14));
}
.tps-panel .tps-cf-ramp-cell {
  border: 0; padding: 0; cursor: pointer; height: 30px; position: relative;
  display: flex; align-items: center; justify-content: center;
  font-size: 9px; font-weight: var(--tps-fw-semibold, 600); font-variant-numeric: tabular-nums; letter-spacing: -0.02em;
  transition: box-shadow var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease);
}
.tps-panel .tps-cf-ramp-cell:hover { z-index: 3; box-shadow: inset 0 0 0 2px color-mix(in srgb, var(--tps-panel-bg, #fff) 60%, transparent); }
.tps-panel .tps-cf-ramp-cell:focus-visible,
.tps-panel .tps-cf-ramp-cell.is-sel {
  outline: none; z-index: 4;
  box-shadow: inset 0 0 0 2px var(--tps-panel-bg, #fff), inset 0 0 0 4px var(--tps-accent, currentColor);
}
/* Faint secondary ring on the inverted ("invert lightness") mirror shade \u2014
   present alongside the prominent ring on the actually-selected shade. */
.tps-panel .tps-cf-ramp-cell.is-sel-mirror {
  z-index: 3;
  box-shadow: inset 0 0 0 2px var(--tps-panel-bg, #fff),
              inset 0 0 0 3px color-mix(in srgb, var(--tps-accent, currentColor) 42%, transparent);
}

/* \u2500\u2500 Invert-lightness toggle \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-invert {
  display: flex; align-items: center; gap: 8px; margin-top: var(--tps-space-3, 12px);
  cursor: pointer; font-size: var(--tps-fs-hint, 12px); color: var(--tps-text, inherit); font-weight: var(--tps-fw-medium, 500);
}
.tps-panel .tps-cf-invert-cb { margin: 0; cursor: pointer; accent-color: var(--tps-accent, currentColor); }
.tps-panel .tps-cf-invert-hint { color: var(--tps-text-faint, rgba(127,127,127,0.5)); font-weight: var(--tps-fw-regular, 400); }
/* Dimmed + non-interactive until a real, non-500 shade is picked (500 mirrors
   to itself, so inverting it is a no-op). */
.tps-panel .tps-cf-invert.is-disabled { opacity: 0.42; cursor: default; }
.tps-panel .tps-cf-invert.is-disabled .tps-cf-invert-cb { cursor: default; }

/* \u2500\u2500 Custom palette \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-custom-row { min-height: 30px; margin-bottom: var(--tps-space-3, 12px); }
.tps-panel .tps-cf-custom-empty {
  grid-column: 1 / -1; display: flex; align-items: center; padding: 0 10px; min-height: 30px;
  font-size: var(--tps-fs-hint, 12px); font-weight: var(--tps-fw-regular, 400); letter-spacing: 0;
  color: var(--tps-text-faint, rgba(127,127,127,0.55));
}
.tps-panel .tps-cf-custom-dot { cursor: grab; }
.tps-panel .tps-cf-custom-dot.is-dragging { opacity: 0.4; cursor: grabbing; }

.tps-panel .tps-cf-addrow { display: flex; align-items: center; gap: 8px; }
.tps-panel .tps-cf-remove {
  cursor: pointer; border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  background: var(--tps-bg-input, rgba(127,127,127,0.06)); color: var(--tps-text-muted, rgba(127,127,127,0.75));
  border-radius: var(--tps-radius-md, 8px); height: 32px; padding: 0 14px; font: inherit;
  font-size: var(--tps-fs-hint, 12px); font-weight: var(--tps-fw-medium, 500);
}
.tps-panel .tps-cf-remove[hidden] { display: none; }
.tps-panel .tps-cf-remove:hover { border-color: var(--tps-border-strong, rgba(127,127,127,0.28)); color: var(--tps-text, inherit); }
.tps-panel .tps-cf-add {
  cursor: pointer; border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  background: var(--tps-bg-input, rgba(127,127,127,0.06)); color: var(--tps-text, inherit);
  border-radius: var(--tps-radius-md, 8px); height: 32px; padding: 0 14px; font: inherit;
  font-size: var(--tps-fs-hint, 12px); font-weight: var(--tps-fw-semibold, 600);
}
.tps-panel .tps-cf-add:hover { border-color: var(--tps-border-strong, rgba(127,127,127,0.28)); }
.tps-panel .tps-cf-custom-count {
  margin-left: auto; font-size: var(--tps-fs-section, 11px);
  color: var(--tps-text-faint, rgba(127,127,127,0.5)); font-variant-numeric: tabular-nums;
}

/* \u2500\u2500 Hex input \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-hexbox {
  display: inline-flex; align-items: center; gap: 8px; box-sizing: border-box; height: 32px;
  background: var(--tps-bg-input, rgba(127,127,127,0.06));
  border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  border-radius: var(--tps-radius-md, 8px); padding: 0 8px 0 10px;
}
.tps-panel .tps-cf-hex-dot {
  width: 15px; height: 15px; border-radius: var(--tps-radius-sm, 5px);
  box-shadow: inset 0 0 0 1px var(--tps-swatch-inset, rgba(127,127,127,0.22));
}
.tps-panel .tps-cf-hex-input {
  border: 0; background: transparent; outline: none;
  font-family: var(--tps-font-mono, ui-monospace, monospace);
  font-size: var(--tps-fs-hint, 12px); color: var(--tps-text, inherit); width: 84px;
  font-variant-numeric: tabular-nums;
}
.tps-panel .tps-cf-hex-input::placeholder { color: var(--tps-text-faint, rgba(127,127,127,0.5)); }

/* \u2500\u2500 Universal: No color \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-divider {
  height: 1px; margin: var(--tps-space-3, 12px) 0; background: var(--tps-divider, rgba(127,127,127,0.12));
}
.tps-panel .tps-cf-universal { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
.tps-panel .tps-cf-none {
  display: inline-flex; align-items: center; gap: 7px; cursor: pointer; box-sizing: border-box; height: 32px;
  background: var(--tps-bg-input, rgba(127,127,127,0.06));
  border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  border-radius: var(--tps-radius-md, 8px); padding: 0 12px; font: inherit;
  font-size: var(--tps-fs-hint, 12px); font-weight: var(--tps-fw-medium, 500);
  color: var(--tps-text-muted, rgba(127,127,127,0.7));
}
.tps-panel .tps-cf-none:hover { border-color: var(--tps-border-strong, rgba(127,127,127,0.28)); color: var(--tps-text, inherit); }
.tps-panel .tps-cf-none.is-sel { border-color: var(--tps-accent, currentColor); color: var(--tps-text, inherit); }
.tps-panel .tps-cf-none-sw {
  width: 15px; height: 15px; border-radius: 50%; position: relative; overflow: hidden;
  box-shadow: inset 0 0 0 1px var(--tps-border-strong, rgba(127,127,127,0.3));
}
.tps-panel .tps-cf-none-sw::after {
  content: ""; position: absolute; left: 50%; top: -3px; width: 1.5px; height: 21px;
  background: var(--tps-danger, #e2555f); transform: rotate(45deg);
}

/* \u2500\u2500 Instant tooltip (drawn by the component, not native title delay) \u2500\u2500\u2500 */
.tps-panel .tps-cf-tip {
  position: fixed; z-index: 2147483000; transform: translate(-50%, calc(-100% - 8px));
  padding: 3px 8px; border-radius: var(--tps-radius-sm, 5px);
  background: var(--tps-text, #1a1a1a); color: var(--tps-panel-bg, #fff);
  font-size: var(--tps-fs-section, 11px); font-weight: var(--tps-fw-medium, 500);
  line-height: 1.3; white-space: nowrap; pointer-events: none; opacity: 0;
  box-shadow: 0 2px 8px rgba(0,0,0,0.35);
}
.tps-panel .tps-cf-tip.is-visible { opacity: 1; }

@media (prefers-reduced-motion: reduce) {
  .tps-panel .tps-cf-dot,
  .tps-panel .tps-cf-tab,
  .tps-panel .tps-cf-tile,
  .tps-panel .tps-cf-remove { transition: none; }
}
`;

  // ../../shared/settings-ui/helpers.js
  var PANEL_CSS = tokens_default + "\n" + components_default + "\n" + color_field_default;
  function h(tag, props, ...children) {
    const el = document.createElement(tag);
    const dom = (
      /** @type {any} */
      el
    );
    if (props) {
      for (const k in props) {
        const v = props[k];
        if (v == null || v === false) continue;
        if (k === "class" || k === "className") {
          el.className = v;
        } else if (k === "style" && typeof v === "object") {
          Object.assign(el.style, v);
        } else if (k === "dataset" && typeof v === "object") {
          for (const dk in v) el.dataset[dk] = v[dk];
        } else if (k.startsWith("on") && typeof v === "function") {
          el.addEventListener(k.slice(2).toLowerCase(), v);
        } else if (k in dom && typeof dom[k] !== "function") {
          try {
            dom[k] = v;
          } catch {
            el.setAttribute(k, v);
          }
        } else {
          el.setAttribute(k, v === true ? "" : String(v));
        }
      }
    }
    appendChildren(el, children);
    return el;
  }
  __name(h, "h");
  function appendChildren(parent, children) {
    for (const c of children) {
      if (c == null || c === false) continue;
      if (Array.isArray(c)) {
        appendChildren(parent, c);
        continue;
      }
      parent.appendChild(c instanceof Node ? c : document.createTextNode(String(c)));
    }
  }
  __name(appendChildren, "appendChildren");
  function panel({ pluginClass } = {}, children = []) {
    const cls = ["tps-panel", pluginClass].filter(Boolean).join(" ");
    return h("div", { class: cls }, ...children);
  }
  __name(panel, "panel");
  function pluginHeader({
    title: heading,
    lede: ledeText,
    helper,
    helperOpen,
    helperDefaultOpen = false,
    onHelperToggle,
    icon = "",
    version = "1.0",
    author = "@akaready",
    homepage = "https://akaready.com",
    repository = "https://github.com/akaready",
    coffee = "https://buymeacoffee.com/akaready"
  }) {
    const iconClass = icon ? icon.startsWith("ti-") ? icon : `ti-${icon}` : "";
    const helperLines = normalizeHelperLines(helper);
    const children = [
      iconClass ? h(
        "div",
        { class: "tps-plugin-header-logo", "aria-hidden": "true" },
        h("i", { class: `ti ${iconClass} tps-plugin-header-logo-icon`, "aria-hidden": "true" })
      ) : null,
      h("h1", { class: "tps-plugin-header-title" }, heading),
      ledeText ? h("p", { class: "tps-plugin-header-lede" }, ledeText) : null,
      helperLines.length ? renderPluginHeaderHelper({
        lines: helperLines,
        defaultOpen: helperDefaultOpen,
        open: helperOpen,
        onToggle: onHelperToggle
      }) : null,
      h(
        "p",
        { class: "tps-plugin-header-attr" },
        h(
          "span",
          { class: "tps-plugin-header-link-group" },
          h("i", { class: "ti ti-link tps-plugin-header-icon", "aria-hidden": "true" }),
          h("a", {
            class: "tps-plugin-header-link tps-plugin-header-link--blue",
            href: homepage,
            target: "_blank",
            rel: "noopener noreferrer"
          }, author)
        ),
        h(
          "span",
          { class: "tps-plugin-header-link-group" },
          h("i", { class: "ti ti-coffee tps-plugin-header-icon", "aria-hidden": "true" }),
          h("a", {
            class: "tps-plugin-header-link tps-plugin-header-link--pink",
            href: coffee,
            target: "_blank",
            rel: "noopener noreferrer"
          }, "buy me a coffee")
        ),
        version ? h(
          "span",
          { class: "tps-plugin-header-link-group" },
          h("span", { class: "tps-plugin-header-icon tps-plugin-header-iconify tps-plugin-header-iconify-github", "aria-hidden": "true" }),
          h("a", { class: "tps-plugin-header-link tps-plugin-header-link--muted tps-plugin-header-version", href: repository, target: "_blank", rel: "noopener noreferrer" }, `v${version}`)
        ) : null
      )
    ];
    return h("div", { class: "tps-plugin-header" }, ...children);
  }
  __name(pluginHeader, "pluginHeader");
  function normalizeHelperLines(helper) {
    if (!helper) return [];
    if (typeof helper === "string") {
      const text = helper.trim();
      return text ? [text] : [];
    }
    if (Array.isArray(helper)) {
      return helper.map((line) => String(line).trim()).filter(Boolean);
    }
    return [];
  }
  __name(normalizeHelperLines, "normalizeHelperLines");
  function renderPluginHeaderHelper({ lines, defaultOpen = false, open, onToggle }) {
    const initialOpen = open == null ? !!defaultOpen : !!open;
    const wrap = h("div", {
      class: "tps-plugin-header-helper-wrap",
      dataset: { open: String(initialOpen) }
    });
    const icon = h("i", { class: "ti ti-info-circle tps-plugin-header-helper-icon", "aria-hidden": "true" });
    const toggle = h("button", {
      type: "button",
      class: "tps-plugin-header-helper-toggle",
      "aria-expanded": String(initialOpen)
    }, icon, h("span", { class: "tps-plugin-header-helper-toggle-label" }, "Instructions"));
    const body = h(
      "div",
      { class: "tps-plugin-header-helper-body" },
      h("p", { class: "tps-plugin-header-helper-line" }, lines.join(" "))
    );
    const setOpen = /* @__PURE__ */ __name((nextOpen) => {
      wrap.dataset.open = String(nextOpen);
      toggle.setAttribute("aria-expanded", String(nextOpen));
      if (onToggle) onToggle(nextOpen);
    }, "setOpen");
    toggle.addEventListener("click", () => {
      setOpen(wrap.dataset.open !== "true");
    });
    body.addEventListener("click", () => {
      if (wrap.dataset.open === "true") setOpen(false);
    });
    wrap.appendChild(toggle);
    wrap.appendChild(body);
    return wrap;
  }
  __name(renderPluginHeaderHelper, "renderPluginHeaderHelper");
  function pluginHeaderFromConfig(conf, { version, helper, helperOpen, helperDefaultOpen, onHelperToggle } = {}) {
    const resolvedHelper = helper ?? conf.instructions;
    return pluginHeader({
      title: conf.name || "",
      lede: conf.description,
      helper: resolvedHelper,
      helperOpen,
      helperDefaultOpen,
      onHelperToggle,
      icon: conf.icon,
      version: version ?? conf.version,
      author: conf.author,
      homepage: conf.homepage,
      repository: conf.repository,
      coffee: conf.coffee
    });
  }
  __name(pluginHeaderFromConfig, "pluginHeaderFromConfig");
  function section({ label, hint, collapsible, defaultOpen = true, open, onToggle, summary, body = [] }) {
    const bodyChildren = Array.isArray(body) ? body : [body];
    const bodyEl = h("div", { class: "tps-section-body" }, ...bodyChildren);
    if (!collapsible) {
      return h(
        "section",
        { class: "tps-section" },
        h("div", { class: "tps-section-label" }, label),
        hint ? h("p", { class: "tps-section-hint" }, hint) : null,
        bodyEl
      );
    }
    const initialOpen = open == null ? !!defaultOpen : !!open;
    const sectionEl = h("section", {
      class: "tps-section tps-section--collapsible",
      dataset: { open: String(initialOpen) }
    });
    const chev = h("span", { class: "tps-section-chev", "aria-hidden": "true" }, "\u25B8");
    const labelEl = h("span", { class: "tps-section-label" }, label);
    const summaryEl = h("span", { class: "tps-section-summary" });
    const paintSummary = /* @__PURE__ */ __name((isOpen) => {
      summaryEl.replaceChildren();
      if (isOpen || summary == null) return;
      const content = typeof summary === "function" ? summary() : summary;
      if (content == null || content === "") return;
      if (typeof content === "string") summaryEl.textContent = content;
      else summaryEl.appendChild(content);
    }, "paintSummary");
    const setOpen = /* @__PURE__ */ __name((nextOpen) => {
      sectionEl.dataset.open = String(nextOpen);
      header.setAttribute("aria-expanded", String(nextOpen));
      paintSummary(nextOpen);
      if (onToggle) onToggle(nextOpen);
    }, "setOpen");
    const header = h("button", {
      type: "button",
      class: "tps-section-header",
      "aria-expanded": String(initialOpen),
      onClick: /* @__PURE__ */ __name(() => setOpen(sectionEl.dataset.open !== "true"), "onClick")
    }, chev, labelEl, summaryEl);
    paintSummary(initialOpen);
    sectionEl.appendChild(header);
    if (hint) sectionEl.appendChild(h("p", { class: "tps-section-hint" }, hint));
    sectionEl.appendChild(bodyEl);
    return sectionEl;
  }
  __name(section, "section");
  function optionRow({ type = "checkbox", name, value, label, desc, checked, onChange }) {
    const input = h("input", {
      type,
      name,
      value,
      checked: !!checked,
      onChange: onChange ? (e) => onChange(e) : null
    });
    const labelEl = h("span", { class: "tps-opt-label" }, label);
    const descEl = desc ? h("span", { class: "tps-opt-desc" }, desc) : null;
    return h("label", { class: "tps-opt" }, input, labelEl, descEl);
  }
  __name(optionRow, "optionRow");

  // plugin.js
  var PLUGIN_VERSION = "1.0.1";
  var ROOT_CLASS = "plg-jump-move-send";
  var PANEL_TYPE = "jump-move-send-settings";
  var STORAGE_KEY_BASE = "jump-move-send";
  var DEFAULT_SETTINGS = Object.freeze({
    confirmBeforeMove: false,
    relativeToJournalPage: false
  });
  var DATE_SPECS = [
    { suffix: "Today", kind: "days", offset: 0 },
    { suffix: "Tomorrow", kind: "days", offset: 1 },
    { suffix: "2 days from now", kind: "days", offset: 2 },
    { suffix: "3 days from now", kind: "days", offset: 3 },
    { suffix: "4 days from now", kind: "days", offset: 4 },
    { suffix: "5 days from now", kind: "days", offset: 5 },
    { suffix: "6 days from now", kind: "days", offset: 6 },
    { suffix: "7 days from now", kind: "days", offset: 7 },
    { suffix: "Yesterday", kind: "days", offset: -1 },
    { suffix: "1 week from now", kind: "days", offset: 7 },
    { suffix: "2 weeks from now", kind: "days", offset: 14 },
    { suffix: "3 weeks from now", kind: "days", offset: 21 },
    { suffix: "1 month from now", kind: "months", offset: 1 },
    { suffix: "next Monday", kind: "weekday", weekday: 1 },
    { suffix: "next Tuesday", kind: "weekday", weekday: 2 },
    { suffix: "next Wednesday", kind: "weekday", weekday: 3 },
    { suffix: "next Thursday", kind: "weekday", weekday: 4 },
    { suffix: "next Friday", kind: "weekday", weekday: 5 },
    { suffix: "next Saturday", kind: "weekday", weekday: 6 },
    { suffix: "next Sunday", kind: "weekday", weekday: 0 }
  ];
  var LISTITEM_SELECTOR = ".listitem[data-guid]";
  var CARET_LINE_SELECTOR = ".listitem.listitem-with-caret[data-guid]";
  var TEXT_SELECTION_HIGHLIGHT_SELECTOR = ".text-selection-self .text-selection";
  var UNDO_STACK_LIMIT = 20;
  var TELEMETRY_ENDPOINT = "https://thymer-plugins.goatcounter.com/count";
  var TELEMETRY_SCRIPT_SRC = "https://gc.zgo.at/count.js";
  var _telemetryScriptPromise = null;
  function _loadGoatCounter() {
    if (_telemetryScriptPromise) return _telemetryScriptPromise;
    _telemetryScriptPromise = new Promise((resolve) => {
      window.goatcounter = window.goatcounter || {};
      window.goatcounter.no_onload = true;
      window.goatcounter.allow_local = false;
      if (typeof window.goatcounter.count === "function") {
        resolve();
        return;
      }
      const s = document.createElement("script");
      s.async = true;
      s.src = TELEMETRY_SCRIPT_SRC;
      s.setAttribute("data-goatcounter", TELEMETRY_ENDPOINT);
      s.setAttribute("data-goatcounter-settings", '{"no_onload": true}');
      s.onload = () => resolve();
      s.onerror = () => resolve();
      document.head.appendChild(s);
    });
    return _telemetryScriptPromise;
  }
  __name(_loadGoatCounter, "_loadGoatCounter");
  function _fireTelemetry(path) {
    _loadGoatCounter().then(() => {
      try {
        window.goatcounter.count({ path, title: "", event: false });
      } catch (_) {
      }
    });
  }
  __name(_fireTelemetry, "_fireTelemetry");
  function _telemetryBlocked() {
    try {
      if (navigator.doNotTrack === "1") return true;
      if (localStorage.getItem("tps-telemetry-opt-out") === "1") return true;
    } catch (_) {
      return true;
    }
    return false;
  }
  __name(_telemetryBlocked, "_telemetryBlocked");
  function pingInstall(slug) {
    try {
      if (_telemetryBlocked()) return;
      const key = "tps-tcm-" + slug;
      if (localStorage.getItem(key) === "1") return;
      localStorage.setItem(key, "1");
      _fireTelemetry("thymer-" + slug);
    } catch (_) {
    }
  }
  __name(pingInstall, "pingInstall");
  function pingActive(slug) {
    try {
      if (_telemetryBlocked()) return;
      const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
      const key = "tps-act-" + slug;
      if (localStorage.getItem(key) === today) return;
      localStorage.setItem(key, today);
      _fireTelemetry("thymer-" + slug + "/active");
    } catch (_) {
    }
  }
  __name(pingActive, "pingActive");
  var Plugin = class extends AppPlugin {
    static {
      __name(this, "Plugin");
    }
    onLoad() {
      pingInstall("jump-move-send");
      pingActive("jump-move-send");
      this._commands = [];
      this._settingsCmd = null;
      this._undoCmd = null;
      this._diagCmd = null;
      this._baseToggleCmd = null;
      this._statusItem = null;
      this._baseStatusItem = null;
      this._pollTimer = 0;
      this._classObserver = null;
      this._selectionOverlayObserver = null;
      this._panelEl = null;
      this._lastSelectionGuids = /* @__PURE__ */ new Set();
      this._itemCache = /* @__PURE__ */ new Map();
      this._undoStack = [];
      this._inFlight = false;
      this._suppressStashUntil = 0;
      this._captureSelection = () => this._stashSelection();
      this._captureFromEvent = (e) => {
        this._stashFromEvent(e);
        if (e?.type === "keydown" || e?.type === "keyup") {
          const kick = /* @__PURE__ */ __name(() => this._pollActiveLine(), "kick");
          requestAnimationFrame(kick);
          setTimeout(kick, 50);
          setTimeout(kick, 150);
        }
      };
      this._settings = this._loadSettings();
      this.ui.injectCSS(PANEL_CSS);
      for (const spec of DATE_SPECS) {
        this._registerDateCmd("Move to: " + spec.suffix, spec, true);
        this._registerDateCmd("Send to: " + spec.suffix, spec, false);
        this._registerGoToCmd("Jump to: " + spec.suffix, spec);
      }
      this._undoCmd = this.ui.addCommandPaletteCommand({
        label: "Jump Move Send: Undo Last Move",
        icon: "arrow-back-up",
        onSelected: /* @__PURE__ */ __name(() => {
          void this._undoLastMove();
        }, "onSelected")
      });
      this._diagCmd = this.ui.addCommandPaletteCommand({
        label: "Jump Move Send: Diagnose Cursor",
        icon: "bug",
        onSelected: /* @__PURE__ */ __name(() => this._diagnoseCursor(), "onSelected")
      });
      this._commands.push(this._diagCmd);
      const diagLiveCmd = this.ui.addCommandPaletteCommand({
        label: "Jump Move Send: Diagnose Cursor Live (5s)",
        icon: "bug",
        onSelected: /* @__PURE__ */ __name(() => this._diagnoseCursorLive(), "onSelected")
      });
      if (diagLiveCmd) this._commands.push(diagLiveCmd);
      const diagSelCmd = this.ui.addCommandPaletteCommand({
        label: "Jump Move Send: Diagnose Selection",
        icon: "bug",
        onSelected: /* @__PURE__ */ __name(() => this._diagnoseSelectionNow(), "onSelected")
      });
      if (diagSelCmd) this._commands.push(diagSelCmd);
      const diagSelLiveCmd = this.ui.addCommandPaletteCommand({
        label: "Jump Move Send: Diagnose Selection Live (10s)",
        icon: "bug",
        onSelected: /* @__PURE__ */ __name(() => this._diagnoseSelectionLive(), "onSelected")
      });
      if (diagSelLiveCmd) this._commands.push(diagSelLiveCmd);
      this._settingsCmd = this.ui.addCommandPaletteCommand({
        label: "Plugin: Jump Move Send",
        icon: "settings",
        onSelected: /* @__PURE__ */ __name(() => {
          void this._openSettings();
        }, "onSelected")
      });
      this.ui.registerCustomPanelType(PANEL_TYPE, (pluginPanel) => {
        try {
          pluginPanel.setTitle("Jump Move Send Settings");
        } catch {
        }
        const root = pluginPanel.getElement();
        if (!root) return;
        this._panelEl = root;
        this._renderSettings();
      });
      window.addEventListener("pointerdown", this._captureFromEvent, true);
      window.addEventListener("mouseup", this._captureFromEvent, true);
      window.addEventListener("focusin", this._captureFromEvent, true);
      window.addEventListener("focusout", this._captureFromEvent, true);
      window.addEventListener("keydown", this._captureFromEvent, true);
      window.addEventListener("keyup", this._captureFromEvent, true);
      document.addEventListener("selectionchange", this._captureSelection, true);
      this._pollTimer = window.setInterval(() => this._pollActiveLine(), 300);
      try {
        this._classObserver = new MutationObserver((muts) => {
          if (this._stashSuppressed()) return;
          for (const m of muts) {
            if (m.type !== "attributes" || m.attributeName !== "class") continue;
            const el = m.target;
            if (!(el instanceof Element)) continue;
            if (!el.matches?.(CARET_LINE_SELECTOR)) continue;
            const focusedPanel = document.querySelector(".panel.focused-panel, .panel.has-focus");
            if (focusedPanel && !focusedPanel.contains(el)) continue;
            const guid = el.getAttribute("data-guid");
            if (!guid) continue;
            const multi = this._collectSelectionGuids();
            if (multi.size > 1) {
              this._lastSelectionGuids = multi;
              this._updateStatus();
              continue;
            }
            if (this._lastSelectionGuids.size === 1 && this._lastSelectionGuids.has(guid)) continue;
            this._lastSelectionGuids = /* @__PURE__ */ new Set([guid]);
            this._updateStatus();
          }
        });
        this._classObserver.observe(document.body, {
          subtree: true,
          attributes: true,
          attributeFilter: ["class"]
        });
      } catch {
      }
      try {
        this._selectionOverlayObserver = new MutationObserver((muts) => {
          if (this._stashSuppressed()) return;
          let touched = false;
          for (const m of muts) {
            if (m.type !== "childList") continue;
            const t = m.target;
            if (t instanceof Element && t.matches?.(".text-selection-self")) {
              touched = true;
              break;
            }
          }
          if (!touched) return;
          const guids = this._collectSelectionGuids();
          if (guids.size === 0) return;
          if (this._guidsEqual(guids, this._lastSelectionGuids)) return;
          this._lastSelectionGuids = guids;
          this._updateStatus();
        });
        this._selectionOverlayObserver.observe(document.body, {
          subtree: true,
          childList: true
        });
      } catch {
      }
      try {
        this._baseStatusItem = this.ui.addStatusBarItem({
          label: this._baseStatusLabel(),
          tooltip: "Jump Move Send \u2014 date base (click to toggle)",
          onClick: /* @__PURE__ */ __name(() => this._toggleDateBase(), "onClick")
        });
      } catch {
      }
      try {
        this._statusItem = this.ui.addStatusBarItem({
          label: "\u2014",
          tooltip: "Jump Move Send \u2014 click to copy tracked guid(s)",
          onClick: /* @__PURE__ */ __name(() => this._copyTrackedGuid(), "onClick")
        });
      } catch {
      }
      this._registerBaseToggleCmd();
      this._updateStatus();
    }
    _registerDateCmd(label, spec, navAfter) {
      const cmd = this.ui.addCommandPaletteCommand({
        label,
        icon: "calendar-event",
        onSelected: /* @__PURE__ */ __name(() => {
          void this._moveTo({ ...spec, label }, navAfter);
        }, "onSelected")
      });
      if (cmd) this._commands.push(cmd);
    }
    _registerGoToCmd(label, spec) {
      const cmd = this.ui.addCommandPaletteCommand({
        label,
        icon: "calendar",
        onSelected: /* @__PURE__ */ __name(() => {
          void this._goTo(spec);
        }, "onSelected")
      });
      if (cmd) this._commands.push(cmd);
    }
    async _goTo(spec) {
      const baseRecord = this.ui.getActivePanel?.()?.getActiveRecord?.();
      const targetDate = this._resolveTargetDate(spec, baseRecord);
      if (!targetDate) return this._toast("error", "Could not compute date.");
      const users = this.data.getActiveUsers?.() || [];
      const user = users[0];
      if (!user) return this._toast("error", "No active user.");
      const pluginPanel = this.ui.getActivePanel?.();
      if (!pluginPanel?.navigateToJournal) return this._toast("error", "No active panel to navigate.");
      try {
        pluginPanel.navigateToJournal(user, targetDate);
        this._toast("success", "Jumped to " + this._fmtDate(targetDate) + ".");
      } catch {
        this._toast("error", "Navigation failed.");
      }
    }
    onUnload() {
      if (this._captureSelection) {
        document.removeEventListener("selectionchange", this._captureSelection, true);
      }
      if (this._captureFromEvent) {
        window.removeEventListener("pointerdown", this._captureFromEvent, true);
        window.removeEventListener("mouseup", this._captureFromEvent, true);
        window.removeEventListener("focusin", this._captureFromEvent, true);
        window.removeEventListener("focusout", this._captureFromEvent, true);
        window.removeEventListener("keydown", this._captureFromEvent, true);
        window.removeEventListener("keyup", this._captureFromEvent, true);
      }
      if (this._pollTimer) {
        window.clearInterval(this._pollTimer);
        this._pollTimer = 0;
      }
      if (this._classObserver) {
        try {
          this._classObserver.disconnect();
        } catch {
        }
        this._classObserver = null;
      }
      if (this._selectionOverlayObserver) {
        try {
          this._selectionOverlayObserver.disconnect();
        } catch {
        }
        this._selectionOverlayObserver = null;
      }
      if (this._statusItem) {
        try {
          this._statusItem.remove();
        } catch {
        }
        this._statusItem = null;
      }
      if (this._baseStatusItem) {
        try {
          this._baseStatusItem.remove();
        } catch {
        }
        this._baseStatusItem = null;
      }
      if (this._baseToggleCmd) {
        try {
          this._baseToggleCmd.remove();
        } catch {
        }
        this._baseToggleCmd = null;
      }
      for (const c of this._commands || []) {
        try {
          c?.remove?.();
        } catch {
        }
      }
      this._commands = [];
      if (this._settingsCmd) {
        try {
          this._settingsCmd.remove();
        } catch {
        }
      }
      this._settingsCmd = null;
      if (this._undoCmd) {
        try {
          this._undoCmd.remove();
        } catch {
        }
      }
      this._undoCmd = null;
      if (this._diagCmd) {
        try {
          this._diagCmd.remove();
        } catch {
        }
      }
      this._diagCmd = null;
      this._undoStack = [];
      this._panelEl = null;
    }
    // ── Settings ────────────────────────────────────────────────────────
    _storageKey() {
      let guid = "default";
      try {
        guid = this.getWorkspaceGuid?.() || "default";
      } catch {
      }
      return STORAGE_KEY_BASE + "/" + guid + "/settings";
    }
    _loadSettings() {
      try {
        const raw = JSON.parse(localStorage.getItem(this._storageKey()) || "{}");
        const obj = raw && typeof raw === "object" ? raw : {};
        return { ...DEFAULT_SETTINGS, ...obj };
      } catch {
        return { ...DEFAULT_SETTINGS };
      }
    }
    _saveSettings() {
      try {
        localStorage.setItem(this._storageKey(), JSON.stringify(this._settings));
      } catch {
      }
    }
    _updateSetting(key, value) {
      if (!Object.prototype.hasOwnProperty.call(DEFAULT_SETTINGS, key)) return;
      this._settings = { ...this._settings, [key]: Boolean(value) };
      this._saveSettings();
      if (key === "relativeToJournalPage") {
        this._updateBaseStatus();
        this._registerBaseToggleCmd();
        if (this._panelEl && document.contains(this._panelEl)) this._renderSettings();
      }
    }
    _baseStatusLabel() {
      return this._settings?.relativeToJournalPage ? "Date: Journal" : "Date: Today";
    }
    _updateBaseStatus() {
      if (!this._baseStatusItem) return;
      try {
        this._baseStatusItem.setLabel?.(this._baseStatusLabel());
      } catch {
      }
    }
    _registerBaseToggleCmd() {
      if (this._baseToggleCmd) {
        try {
          this._baseToggleCmd.remove();
        } catch {
        }
        this._baseToggleCmd = null;
      }
      const on = !!this._settings?.relativeToJournalPage;
      const label = on ? "Jump Move Send: Date base \u2014 \u2611 Journal Page  (toggle to Today)" : "Jump Move Send: Date base \u2014 \u2611 Today  (toggle to Journal Page)";
      try {
        this._baseToggleCmd = this.ui.addCommandPaletteCommand({
          label,
          icon: "arrows-shuffle",
          onSelected: /* @__PURE__ */ __name(() => this._toggleDateBase(), "onSelected")
        });
      } catch {
      }
    }
    _toggleDateBase() {
      const newVal = !this._settings?.relativeToJournalPage;
      this._updateSetting("relativeToJournalPage", newVal);
      this._toast("info", "Date base: " + (newVal ? "Journal Page" : "Today"));
    }
    async _openSettings() {
      if (this._panelEl && document.contains(this._panelEl)) return;
      const active = this.ui.getActivePanel?.();
      const pluginPanel = await this.ui.createPanel(active ? { afterPanel: active } : void 0);
      if (pluginPanel) pluginPanel.navigateToCustomType(PANEL_TYPE);
    }
    _renderSettings() {
      if (!this._panelEl) return;
      const conf = typeof this.getConfiguration === "function" ? this.getConfiguration() || {} : {};
      this._panelEl.replaceChildren(panel({ pluginClass: ROOT_CLASS + "-panel" }, [
        pluginHeaderFromConfig(conf, { version: PLUGIN_VERSION }),
        section({
          label: "Behavior",
          body: [
            optionRow({
              type: "checkbox",
              name: "confirmBeforeMove",
              label: "Confirm before moving",
              desc: "Show a confirmation dialog before each move.",
              checked: this._settings.confirmBeforeMove,
              onChange: /* @__PURE__ */ __name((e) => this._updateSetting("confirmBeforeMove", e.target.checked), "onChange")
            }),
            optionRow({
              type: "checkbox",
              name: "relativeToJournalPage",
              label: "Date offsets relative to visible journal page",
              desc: 'When on, "Tomorrow", "Next Monday", "2 weeks from now", etc. resolve from the journal day you\u2019re viewing instead of from today. Falls back to today if you\u2019re not on a journal page.',
              checked: this._settings.relativeToJournalPage,
              onChange: /* @__PURE__ */ __name((e) => this._updateSetting("relativeToJournalPage", e.target.checked), "onChange")
            })
          ]
        })
      ]));
    }
    // ── Selection tracking ──────────────────────────────────────────────
    _stashSelection() {
      if (this._stashSuppressed()) return;
      const guids = this._collectSelectionGuids();
      if (guids.size > 0) {
        this._lastSelectionGuids = guids;
        this._updateStatus();
      }
    }
    _stashFromEvent(e) {
      if (this._stashSuppressed()) return;
      const t = e?.target;
      if (!(t instanceof Element)) return;
      const li = t.closest ? t.closest(LISTITEM_SELECTOR) : null;
      if (!li) return;
      const guid = li.getAttribute("data-guid");
      if (!guid) return;
      this._lastSelectionGuids = /* @__PURE__ */ new Set([guid]);
      this._updateStatus();
    }
    _stashSuppressed() {
      return this._inFlight || Date.now() < (this._suppressStashUntil || 0);
    }
    _guidsEqual(a, b) {
      if (a.size !== b.size) return false;
      for (const g of a) if (!b.has(g)) return false;
      return true;
    }
    _pollActiveLine() {
      if (this._stashSuppressed()) return;
      try {
        const multi = this._collectSelectionGuids();
        if (multi.size > 1) {
          if (!this._guidsEqual(multi, this._lastSelectionGuids)) {
            this._lastSelectionGuids = multi;
            this._updateStatus();
          }
          return;
        }
      } catch {
      }
      let li = null;
      try {
        const focusedPanel = document.querySelector(".panel.focused-panel, .panel.has-focus") || document.body;
        li = focusedPanel.querySelector?.(CARET_LINE_SELECTOR) || null;
      } catch {
      }
      if (!li) try {
        const sel = window.getSelection?.();
        const node = sel?.focusNode;
        const el = node && node.nodeType === Node.ELEMENT_NODE ? (
          /** @type {Element} */
          node
        ) : node?.parentElement || null;
        li = el?.closest ? el.closest(LISTITEM_SELECTOR) : null;
      } catch {
      }
      if (!li) {
        try {
          li = document.activeElement?.closest?.(LISTITEM_SELECTOR) || null;
        } catch {
        }
      }
      if (!li) {
        try {
          const panel2 = document.querySelector(".panel.focused-panel, .panel.has-focus");
          li = panel2?.querySelector?.(LISTITEM_SELECTOR + ":focus-within") || null;
        } catch {
        }
      }
      if (!li) {
        try {
          const candidates = [
            LISTITEM_SELECTOR + ".is-cursor",
            LISTITEM_SELECTOR + ".has-cursor",
            LISTITEM_SELECTOR + ".line-cursor-here",
            LISTITEM_SELECTOR + ".is-active",
            LISTITEM_SELECTOR + ".is-focused",
            LISTITEM_SELECTOR + ".active",
            LISTITEM_SELECTOR + ".focused"
          ];
          const panel2 = document.querySelector(".panel.focused-panel, .panel.has-focus") || document.body;
          for (const sel of candidates) {
            const hit = panel2.querySelector(sel);
            if (hit) {
              li = hit;
              break;
            }
          }
        } catch {
        }
      }
      if (!li) return;
      const guid = li.getAttribute("data-guid");
      if (!guid) return;
      if (this._lastSelectionGuids.size === 1 && this._lastSelectionGuids.has(guid)) return;
      this._lastSelectionGuids = /* @__PURE__ */ new Set([guid]);
      this._updateStatus();
    }
    _updateStatus() {
      if (!this._statusItem) return;
      try {
        const n = this._lastSelectionGuids.size;
        let label = "\u2014";
        if (n === 1) {
          label = this._lastSelectionGuids.values().next().value || "\u2014";
        } else if (n > 1) {
          label = "\xD7" + n;
        }
        this._statusItem.setLabel?.(label);
      } catch {
      }
    }
    _diagnoseCursorLive() {
      const focusedPanel = document.querySelector(".panel.focused-panel, .panel.has-focus") || document.body;
      const startedAt = Date.now();
      const log = [];
      const seenClasses = /* @__PURE__ */ new Set();
      const obs = new MutationObserver((muts) => {
        for (const m of muts) {
          if (m.type !== "attributes" || m.attributeName !== "class") continue;
          const el = m.target;
          if (!(el instanceof Element)) continue;
          if (!el.matches?.(LISTITEM_SELECTOR)) continue;
          const guid = el.getAttribute("data-guid") || "?";
          const before = (m.oldValue || "").toString();
          const after = (el.className || "").toString();
          after.split(/\s+/).forEach((c) => c && seenClasses.add(c));
          log.push({ ms: Date.now() - startedAt, guid: guid.slice(0, 10), before, after });
        }
      });
      obs.observe(focusedPanel, {
        subtree: true,
        attributes: true,
        attributeOldValue: true,
        attributeFilter: ["class"]
      });
      this._toast("info", "Recording class changes for 5s \u2014 arrow-key around the editor.");
      setTimeout(() => {
        obs.disconnect();
        const lines = [
          "Recorded " + log.length + " class mutations over 5s on focused panel listitems.",
          "",
          "All classes seen during window:",
          Array.from(seenClasses).sort().join("\n"),
          "",
          "Per-mutation log (ms, guid, before \u2192 after):",
          ...log.slice(0, 60).map((e) => e.ms + "ms " + e.guid + ' "' + e.before + '" \u2192 "' + e.after + '"'),
          log.length > 60 ? "\u2026 " + (log.length - 60) + " more truncated" : ""
        ];
        const report = lines.filter(Boolean).join("\n");
        console.log("[jump-move-send] live cursor diagnostic\n" + report);
        try {
          navigator.clipboard?.writeText?.(report);
        } catch {
        }
        this._toast("info", "Live diagnostic done \u2014 " + log.length + " mutations. Copied to clipboard + console.");
      }, 5e3);
    }
    _diagnoseCursor() {
      const sel = window.getSelection?.();
      const focusNode = sel?.focusNode;
      const focusEl = focusNode?.nodeType === Node.ELEMENT_NODE ? focusNode : focusNode?.parentElement;
      const focusLi = focusEl?.closest?.(LISTITEM_SELECTOR);
      const active = document.activeElement;
      const activeLi = active?.closest?.(LISTITEM_SELECTOR);
      const focusedPanel = document.querySelector(".panel.focused-panel, .panel.has-focus");
      const focusWithin = focusedPanel?.querySelector?.(LISTITEM_SELECTOR + ":focus-within");
      const allLis = document.querySelectorAll(LISTITEM_SELECTOR);
      const distinctClasses = /* @__PURE__ */ new Set();
      allLis.forEach((el) => (el.className || "").split(/\s+/).forEach((c) => c && distinctClasses.add(c)));
      const lines = [
        "sel.focusNode \u2192 " + (focusLi?.getAttribute("data-guid")?.slice(0, 10) || "\u2205"),
        "document.activeElement \u2192 " + (activeLi?.getAttribute("data-guid")?.slice(0, 10) || "\u2205"),
        ":focus-within \u2192 " + (focusWithin?.getAttribute("data-guid")?.slice(0, 10) || "\u2205"),
        "stash \u2192 " + (Array.from(this._lastSelectionGuids).map((g) => g.slice(0, 10)).join(",") || "\u2205"),
        "listitems on page: " + allLis.length,
        "distinct .listitem classes: " + Array.from(distinctClasses).filter((c) => c !== "listitem").slice(0, 30).join(" ")
      ];
      const report = lines.join("\n");
      console.log("[jump-move-send] cursor diagnostic\n" + report);
      try {
        navigator.clipboard?.writeText?.(report);
      } catch {
      }
      this._toast("info", "Cursor diagnostic copied to clipboard + console.");
    }
    _copyTrackedGuid() {
      const n = this._lastSelectionGuids.size;
      if (n === 0) {
        this._toast("info", "No line tracked.");
        return;
      }
      const text = Array.from(this._lastSelectionGuids).join("\n");
      const done = /* @__PURE__ */ __name((ok) => this._toast(
        ok ? "success" : "error",
        ok ? "Copied " + n + " guid" + (n === 1 ? "" : "s") + " to clipboard." : "Clipboard write failed."
      ), "done");
      try {
        const p = navigator.clipboard?.writeText?.(text);
        if (p?.then) p.then(() => done(true), () => done(false));
        else done(true);
      } catch {
        done(false);
      }
    }
    _collectSelectionGuids() {
      const guids = /* @__PURE__ */ new Set();
      try {
        const highlights = document.querySelectorAll(TEXT_SELECTION_HIGHLIGHT_SELECTOR);
        if (highlights.length > 0) {
          const root = this._scanRoot();
          const lis = Array.from(root.querySelectorAll(LISTITEM_SELECTOR));
          const liRects = lis.map((li) => ({ li, rect: li.getBoundingClientRect() }));
          for (const h2 of highlights) {
            const hRect = h2.getBoundingClientRect();
            if (hRect.height === 0) continue;
            const hMid = hRect.top + hRect.height / 2;
            for (const { li, rect } of liRects) {
              if (rect.height === 0) continue;
              if (hMid >= rect.top && hMid <= rect.bottom) {
                const g = li.getAttribute("data-guid");
                if (g) guids.add(g);
                break;
              }
            }
          }
          if (guids.size > 0) return guids;
        }
      } catch {
      }
      const sel = window.getSelection?.();
      if (!sel || sel.rangeCount === 0) return guids;
      const focusEl = this._nearestElement(sel.focusNode);
      const anchorEl = this._nearestElement(sel.anchorNode);
      const focusLi = focusEl?.closest?.(LISTITEM_SELECTOR) || null;
      const anchorLi = anchorEl?.closest?.(LISTITEM_SELECTOR) || null;
      if (sel.isCollapsed) {
        const guid = focusLi?.getAttribute?.("data-guid");
        if (guid) guids.add(guid);
        return guids;
      }
      if (focusLi) {
        const g = focusLi.getAttribute("data-guid");
        if (g) guids.add(g);
      }
      if (anchorLi) {
        const g = anchorLi.getAttribute("data-guid");
        if (g) guids.add(g);
      }
      if (focusLi && anchorLi && focusLi !== anchorLi) {
        const root = this._scanRoot();
        const all = Array.from(root.querySelectorAll(LISTITEM_SELECTOR));
        const aIdx = all.indexOf(anchorLi);
        const fIdx = all.indexOf(focusLi);
        if (aIdx >= 0 && fIdx >= 0) {
          const lo = Math.min(aIdx, fIdx);
          const hi = Math.max(aIdx, fIdx);
          for (let i = lo; i <= hi; i += 1) {
            const g = all[i].getAttribute("data-guid");
            if (g) guids.add(g);
          }
        }
      }
      try {
        const range = sel.getRangeAt(0);
        const root = this._scanRoot();
        root.querySelectorAll(LISTITEM_SELECTOR).forEach((el) => {
          if (range.intersectsNode(el)) {
            const g = el.getAttribute("data-guid");
            if (g) guids.add(g);
          }
        });
      } catch {
      }
      return guids;
    }
    _nearestElement(node) {
      if (!node) return null;
      if (node.nodeType === Node.ELEMENT_NODE) return (
        /** @type {Element} */
        node
      );
      return node.parentElement || null;
    }
    _diagnoseSelectionLive() {
      const focusedPanel = document.querySelector(".panel.focused-panel, .panel.has-focus") || document.body;
      const startedAt = Date.now();
      const selSnapshots = [];
      const mutLog = [];
      const snapshotSelection = /* @__PURE__ */ __name((tag) => {
        const sel = window.getSelection?.();
        if (!sel) return;
        const focusEl = this._nearestElement(sel.focusNode);
        const anchorEl = this._nearestElement(sel.anchorNode);
        const focusLi = focusEl?.closest?.(LISTITEM_SELECTOR);
        const anchorLi = anchorEl?.closest?.(LISTITEM_SELECTOR);
        selSnapshots.push({
          ms: Date.now() - startedAt,
          tag,
          collapsed: sel.isCollapsed,
          ranges: sel.rangeCount,
          anchorNode: sel.anchorNode?.nodeName || "null",
          anchorOff: sel.anchorOffset,
          focusNode: sel.focusNode?.nodeName || "null",
          focusOff: sel.focusOffset,
          anchorLi: anchorLi?.getAttribute("data-guid")?.slice(0, 8) || null,
          focusLi: focusLi?.getAttribute("data-guid")?.slice(0, 8) || null,
          rangeStr: sel.toString?.()?.slice(0, 40) || ""
        });
      }, "snapshotSelection");
      const onSelChange = /* @__PURE__ */ __name(() => snapshotSelection("selectionchange"), "onSelChange");
      document.addEventListener("selectionchange", onSelChange, true);
      const obs = new MutationObserver((muts) => {
        for (const m of muts) {
          if (m.type === "attributes") {
            const el = m.target;
            if (!(el instanceof Element)) continue;
            if (!el.matches?.(LISTITEM_SELECTOR)) continue;
            mutLog.push({
              ms: Date.now() - startedAt,
              kind: "attr",
              attr: m.attributeName,
              guid: el.getAttribute("data-guid")?.slice(0, 8) || "?",
              oldVal: (m.oldValue || "").slice(0, 100),
              newVal: (el.getAttribute(m.attributeName) || "").slice(0, 100)
            });
          } else if (m.type === "childList") {
            if (m.addedNodes.length || m.removedNodes.length) {
              const parent = m.target instanceof Element ? m.target : null;
              mutLog.push({
                ms: Date.now() - startedAt,
                kind: "child",
                parent: parent?.tagName + "." + (parent?.className || "").toString().slice(0, 40),
                added: m.addedNodes.length,
                removed: m.removedNodes.length,
                addedTags: Array.from(m.addedNodes).map((n) => n.nodeName + "." + ((n instanceof Element ? n.className : "") || "").toString().slice(0, 30)).slice(0, 5)
              });
            }
          }
        }
      });
      obs.observe(focusedPanel, {
        subtree: true,
        attributes: true,
        attributeOldValue: true,
        childList: true
      });
      snapshotSelection("start");
      this._toast("info", "Recording selection + DOM for 10s \u2014 do your multi-line select NOW.");
      setTimeout(() => {
        obs.disconnect();
        document.removeEventListener("selectionchange", onSelChange, true);
        snapshotSelection("end");
        const lines = [
          "== SELECTION SNAPSHOTS (" + selSnapshots.length + ") ==",
          ...selSnapshots.slice(0, 40).map(
            (s) => s.ms + "ms " + s.tag + " collapsed=" + s.collapsed + " ranges=" + s.ranges + " anchor=" + s.anchorNode + ":" + s.anchorOff + (s.anchorLi ? " (li " + s.anchorLi + ")" : "") + " focus=" + s.focusNode + ":" + s.focusOff + (s.focusLi ? " (li " + s.focusLi + ")" : "") + (s.rangeStr ? ' str="' + s.rangeStr + '"' : "")
          ),
          "",
          "== MUTATIONS (" + mutLog.length + ", first 50) ==",
          ...mutLog.slice(0, 50).map(
            (m) => m.ms + "ms " + m.kind + " " + (m.kind === "attr" ? m.attr + " " + m.guid + ': "' + m.oldVal + '" \u2192 "' + m.newVal + '"' : "parent=" + m.parent + " +" + m.added + "/-" + m.removed + (m.addedTags?.length ? " added=[" + m.addedTags.join(",") + "]" : ""))
          )
        ];
        const report = lines.join("\n");
        console.log("[jump-move-send] live selection diagnostic\n" + report);
        try {
          navigator.clipboard?.writeText?.(report);
        } catch {
        }
        this._toast("info", "Live selection diag done \u2014 " + selSnapshots.length + " sel snaps, " + mutLog.length + " muts. Copied.");
      }, 1e4);
    }
    _diagnoseSelectionNow() {
      const sel = window.getSelection?.();
      const lines = [];
      if (!sel || sel.rangeCount === 0) {
        lines.push("No selection.");
      } else {
        const r = sel.getRangeAt(0);
        const focusEl = this._nearestElement(sel.focusNode);
        const anchorEl = this._nearestElement(sel.anchorNode);
        const focusLi = focusEl?.closest?.(LISTITEM_SELECTOR);
        const anchorLi = anchorEl?.closest?.(LISTITEM_SELECTOR);
        lines.push("isCollapsed: " + sel.isCollapsed);
        lines.push("rangeCount: " + sel.rangeCount);
        lines.push("anchorNode: " + (sel.anchorNode?.nodeName || "null") + " offset=" + sel.anchorOffset);
        lines.push("focusNode:  " + (sel.focusNode?.nodeName || "null") + " offset=" + sel.focusOffset);
        lines.push("anchor listitem: " + (anchorLi?.getAttribute("data-guid")?.slice(0, 10) || "\u2205"));
        lines.push("focus  listitem: " + (focusLi?.getAttribute("data-guid")?.slice(0, 10) || "\u2205"));
        lines.push("range start container: " + (r.startContainer?.nodeName || "null"));
        lines.push("range end container:   " + (r.endContainer?.nodeName || "null"));
        lines.push("range commonAncestor: " + (r.commonAncestorContainer?.nodeName || "null"));
        lines.push("range string length: " + (r.toString?.()?.length || 0));
        const collected = this._collectSelectionGuids();
        lines.push("_collectSelectionGuids \u2192 " + collected.size + " guid(s): " + Array.from(collected).map((g) => g.slice(0, 10)).join(", "));
      }
      const report = lines.join("\n");
      console.log("[jump-move-send] selection diagnostic\n" + report);
      try {
        navigator.clipboard?.writeText?.(report);
      } catch {
      }
      this._toast("info", "Selection diagnostic copied to clipboard + console.");
    }
    _scanRoot() {
      try {
        const panelEl = this.ui.getActivePanel?.()?.getElement?.();
        if (panelEl) return panelEl;
      } catch {
      }
      return document.body;
    }
    _findActiveLineByDom() {
      const guids = /* @__PURE__ */ new Set();
      const active = document.activeElement;
      if (active && active.closest) {
        const li = active.closest(LISTITEM_SELECTOR);
        if (li) {
          const guid = li.getAttribute("data-guid");
          if (guid) {
            guids.add(guid);
            return guids;
          }
        }
      }
      const focusedPanel = document.querySelector(".panel.focused-panel, .panel.has-focus");
      const root = focusedPanel || document.body;
      try {
        const within = root.querySelector(LISTITEM_SELECTOR + ":focus-within");
        if (within) {
          const guid = within.getAttribute("data-guid");
          if (guid) {
            guids.add(guid);
            return guids;
          }
        }
      } catch {
      }
      return guids;
    }
    _diagnoseSelection() {
      try {
        const sel = window.getSelection?.();
        const active = document.activeElement;
        const lis = document.querySelectorAll(LISTITEM_SELECTOR).length;
        const focusedPanel = document.querySelector(".panel.focused-panel, .panel.has-focus");
        const activeTag = active?.tagName?.toLowerCase() || "none";
        const activeClasses = (active?.className || "").toString().slice(0, 60);
        return "[active=" + activeTag + "." + activeClasses + " lis=" + lis + " panel=" + !!focusedPanel + " selRange=" + (sel?.rangeCount || 0) + " stash=" + this._lastSelectionGuids.size + "]";
      } catch (e) {
        return "[diag-error: " + e + "]";
      }
    }
    async _resolveLineItems(record, guids) {
      if (!record || guids.size === 0) return [];
      const matches = [];
      const remaining = new Set(guids);
      const visit = /* @__PURE__ */ __name(async (items, ancestorMatched) => {
        for (const item of items) {
          if (remaining.size === 0) return;
          const guid = item?.guid;
          const isMatch = guid && remaining.has(guid);
          if (isMatch) {
            remaining.delete(guid);
            if (!ancestorMatched) matches.push(item);
          }
          const kids = await item.getChildren?.();
          if (Array.isArray(kids) && kids.length) {
            await visit(kids, ancestorMatched || !!isMatch);
          }
        }
      }, "visit");
      const top = await record.getLineItems?.();
      if (Array.isArray(top)) await visit(top, false);
      return matches;
    }
    async _captureOriginalLocation(item) {
      try {
        const parent = await item.getParent?.();
        if (!parent) return { item, parent: null, afterItem: null };
        const siblings = typeof parent.getChildren === "function" ? await parent.getChildren() : typeof parent.getLineItems === "function" ? await parent.getLineItems() : [];
        const idx = Array.isArray(siblings) ? siblings.findIndex((s) => s?.guid === item.guid) : -1;
        const afterItem = idx > 0 ? siblings[idx - 1] : null;
        return { item, parent, afterItem };
      } catch {
        return { item, parent: null, afterItem: null };
      }
    }
    // ── Date math ───────────────────────────────────────────────────────
    _resolveTargetDate(spec, baseRecord) {
      let d;
      const useJournalBase = !!this._settings?.relativeToJournalPage;
      if (useJournalBase) {
        const details = baseRecord?.getJournalDetails?.();
        if (details?.date) {
          const base = new Date(details.date);
          d = new Date(base.getFullYear(), base.getMonth(), base.getDate());
        }
      }
      if (!d) {
        const now = /* @__PURE__ */ new Date();
        d = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      }
      if (spec.kind === "days") {
        d.setDate(d.getDate() + spec.offset);
      } else if (spec.kind === "months") {
        d.setMonth(d.getMonth() + spec.offset);
      } else if (spec.kind === "weekday") {
        const baseDow = d.getDay();
        let delta = spec.weekday - baseDow;
        if (delta <= 0) delta += 7;
        d.setDate(d.getDate() + delta);
      } else {
        return null;
      }
      if (typeof DateTime === "undefined") return null;
      return DateTime.dateOnly(d.getFullYear(), d.getMonth(), d.getDate());
    }
    _fmtDate(dt) {
      try {
        const date = dt?.toDate?.();
        if (date instanceof Date) {
          return date.toLocaleDateString(void 0, { weekday: "short", month: "short", day: "numeric" });
        }
      } catch {
      }
      return "journal page";
    }
    // ── Move orchestrator ───────────────────────────────────────────────
    async _moveTo(spec, navAfter) {
      if (this._inFlight) {
        return this._toast("info", "Jump Move Send: busy \u2014 try again in a moment.");
      }
      const intentGuids = new Set(this._lastSelectionGuids);
      const liveGuids = this._collectSelectionGuids();
      for (const g of liveGuids) intentGuids.add(g);
      const intentPanel = this.ui.getActivePanel?.();
      const intentRecord = intentPanel?.getActiveRecord?.();
      let cursorTargetGuid = null;
      try {
        const panelEl = intentPanel?.getElement?.();
        if (panelEl && intentGuids.size > 0) {
          const lis = Array.from(panelEl.querySelectorAll(LISTITEM_SELECTOR));
          const firstSelectedIdx = lis.findIndex((li) => {
            const g = li.getAttribute("data-guid");
            return g && intentGuids.has(g);
          });
          if (firstSelectedIdx >= 0) {
            for (let i = firstSelectedIdx - 1; i >= 0; i -= 1) {
              const g = lis[i].getAttribute("data-guid");
              if (g && !intentGuids.has(g)) {
                cursorTargetGuid = g;
                break;
              }
            }
            if (!cursorTargetGuid) {
              for (let i = firstSelectedIdx + 1; i < lis.length; i += 1) {
                const g = lis[i].getAttribute("data-guid");
                if (g && !intentGuids.has(g)) {
                  cursorTargetGuid = g;
                  break;
                }
              }
            }
          }
        }
      } catch {
      }
      this._inFlight = true;
      try {
        if (this._settings.confirmBeforeMove && !this._confirmMove(spec)) return;
        const targetDate = this._resolveTargetDate(spec, intentRecord);
        if (!targetDate) return this._toast("error", 'Could not compute date for "' + spec.label + '".');
        const users = this.data.getActiveUsers?.() || [];
        const user = users[0];
        if (!user) return this._toast("error", "No active user.");
        if (!intentRecord) return this._toast("error", "No active record. Click into the editor and try again.");
        const collections = await this.data.getAllCollections();
        const journal = (collections || []).find((c) => c?.isJournalPlugin?.());
        if (!journal) return this._toast("error", "No journal collection in this workspace.");
        const dest = await journal.getJournalRecord(user, targetDate);
        if (!dest) return this._toast("error", "Could not open the target journal page.");
        if (dest.guid && intentRecord.guid && dest.guid === intentRecord.guid) {
          return this._toast("info", "Already on this journal page.");
        }
        if (intentGuids.size === 0) {
          const debug = this._diagnoseSelection();
          console.log("[jump-move-send] no selection found", debug);
          return this._toast("error", "No line selected. " + debug);
        }
        const items = await this._resolveLineItems(intentRecord, intentGuids);
        const resolved = new Set(items.map((i) => i?.guid).filter(Boolean));
        for (const guid of intentGuids) {
          if (resolved.has(guid)) continue;
          const cached = this._itemCache.get(guid);
          if (cached) items.push(cached);
        }
        console.log("[jump-move-send] resolve summary", {
          intentGuidsSize: intentGuids.size,
          intentGuids: Array.from(intentGuids).map((g) => g.slice(0, 8)),
          resolvedItems: items.length,
          resolvedItemGuids: items.map((i) => i?.guid?.slice?.(0, 8))
        });
        if (items.length === 0) {
          return this._toast("error", "Selected lines do not belong to the active record.");
        }
        const captures = [];
        for (const item of items) {
          captures.push(await this._captureOriginalLocation(item));
        }
        let moved = 0;
        let prev = null;
        let unverified = 0;
        const movedCaptures = [];
        for (let i = 0; i < items.length; i += 1) {
          const item = items[i];
          const sourceGuid = item?.guid;
          if (item.record?.guid === dest.guid) {
            moved += 1;
            if (captures[i]) movedCaptures.push(captures[i]);
            continue;
          }
          try {
            const result = await item.move(dest, prev);
            let foundInDest = await this._verifyInDest(dest, sourceGuid);
            if (!foundInDest) {
              await new Promise((r) => setTimeout(r, 100));
              const freshDest = await journal.getJournalRecord(user, targetDate);
              if (freshDest) foundInDest = await this._verifyInDest(freshDest, sourceGuid);
            }
            console.log("[jump-move-send] move result", {
              sourceGuid,
              intendedDest: dest?.guid,
              resultGuid: result?.guid,
              resultRecord: result?.record?.guid,
              guidPreserved: result?.guid === sourceGuid,
              foundInDestTree: foundInDest
            });
            if (result) {
              prev = result;
              moved += 1;
              if (captures[i]) movedCaptures.push(captures[i]);
              this._cacheItem(result);
              if (!foundInDest) unverified += 1;
            }
          } catch (err) {
            console.log("[jump-move-send] move threw", err);
          }
        }
        if (moved === 0) return this._toast("error", "Move failed.");
        if (unverified > 0) {
          return this._toast("error", "move() returned ok but item not in dest tree (" + unverified + "/" + moved + "). Check console.");
        }
        await new Promise((r) => setTimeout(r, 150));
        if (movedCaptures.length > 0) {
          this._undoStack.push({ label: spec.label, captures: movedCaptures });
          if (this._undoStack.length > UNDO_STACK_LIMIT) this._undoStack.shift();
        }
        const verb = navAfter ? "Moved" : "Sent";
        const expected = intentGuids.size;
        const suffix = expected > moved ? " (" + moved + " of " + expected + " selected)" : "";
        this._toast(
          "success",
          verb + " " + moved + " item" + (moved === 1 ? "" : "s") + " to " + this._fmtDate(targetDate) + suffix + "."
        );
        if (navAfter && intentPanel?.navigateToJournal) {
          try {
            intentPanel.navigateToJournal(user, targetDate);
          } catch {
          }
        }
        this._lastSelectionGuids = /* @__PURE__ */ new Set();
        this._updateStatus();
        this._suppressStashUntil = Date.now() + 500;
        try {
          window.getSelection?.()?.removeAllRanges?.();
        } catch {
        }
        try {
          document.querySelectorAll(".text-selection-self").forEach((el) => {
            el.replaceChildren();
          });
        } catch {
        }
        try {
          const target = cursorTargetGuid ? document.querySelector(LISTITEM_SELECTOR + '[data-guid="' + cursorTargetGuid + '"]') : document.activeElement || document.body;
          if (target instanceof Element) {
            const rect = target.getBoundingClientRect?.();
            if (rect && rect.width > 0 && rect.height > 0) {
              const x = rect.left + Math.min(20, rect.width / 4);
              const y = rect.top + rect.height / 2;
              const mouseOpts = { bubbles: true, cancelable: true, composed: true, view: window, clientX: x, clientY: y, button: 0, buttons: 1 };
              const ptrOpts = { ...mouseOpts, pointerId: 1, pointerType: "mouse", isPrimary: true };
              if (typeof PointerEvent === "function") target.dispatchEvent(new PointerEvent("pointerdown", ptrOpts));
              target.dispatchEvent(new MouseEvent("mousedown", mouseOpts));
              if (typeof PointerEvent === "function") target.dispatchEvent(new PointerEvent("pointerup", { ...ptrOpts, buttons: 0 }));
              target.dispatchEvent(new MouseEvent("mouseup", { ...mouseOpts, buttons: 0 }));
              target.dispatchEvent(new MouseEvent("click", { ...mouseOpts, buttons: 0 }));
            }
            const keyOpts = { key: "ArrowLeft", code: "ArrowLeft", keyCode: 37, which: 37, bubbles: true, cancelable: true };
            target.dispatchEvent(new KeyboardEvent("keydown", keyOpts));
            target.dispatchEvent(new KeyboardEvent("keyup", keyOpts));
          }
        } catch {
        }
      } finally {
        this._inFlight = false;
      }
    }
    async _verifyInDest(dest, sourceGuid) {
      if (!dest || !sourceGuid) return false;
      try {
        const top = await dest.getLineItems?.();
        if (!Array.isArray(top)) return false;
        const stack = [...top];
        while (stack.length) {
          const node = stack.shift();
          if (node?.guid === sourceGuid) return true;
          const kids = await node?.getChildren?.();
          if (Array.isArray(kids) && kids.length) stack.push(...kids);
        }
      } catch {
      }
      return false;
    }
    _cacheItem(item) {
      if (!item?.guid) return;
      this._itemCache.set(item.guid, item);
      if (this._itemCache.size > 50) {
        const firstKey = this._itemCache.keys().next().value;
        this._itemCache.delete(firstKey);
      }
    }
    async _undoLastMove() {
      const batch = this._undoStack.pop();
      if (!batch || !Array.isArray(batch.captures) || batch.captures.length === 0) {
        return this._toast("info", "No moves to undo.");
      }
      let restored = 0;
      for (const cap of batch.captures) {
        if (!cap || !cap.item || !cap.parent) continue;
        try {
          const result = await cap.item.move(cap.parent, cap.afterItem || null);
          if (result) restored += 1;
        } catch {
        }
      }
      if (restored === 0) return this._toast("error", "Undo failed.");
      this._toast(
        "success",
        'Undid "' + batch.label + '" \u2014 restored ' + restored + " item" + (restored === 1 ? "" : "s") + "."
      );
    }
    _confirmMove(spec) {
      const target = spec.label.replace(/^Move to:\s*/, "");
      try {
        return window.confirm("Move the selected line(s) to " + target + "?");
      } catch {
        return true;
      }
    }
    _toast(kind, message) {
      try {
        this.ui.addToaster?.({
          title: message,
          dismissible: true,
          autoDestroyTime: 2500
        });
      } catch {
      }
    }
  };
  return __toCommonJS(plugin_exports);
})();
var Plugin = plugins.Plugin;
