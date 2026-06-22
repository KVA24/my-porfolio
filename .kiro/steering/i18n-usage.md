# i18next Usage Guide

This steering file documents the i18n implementation for the portfolio.

## Quick Start

### Use translations in components
```typescript
import { useTranslation } from 'react-i18next';

export default function MyComponent() {
  const { t, i18n } = useTranslation();
  
  return <h1>{t('section.key')}</h1>;
}
```

### Change language
```typescript
i18n.changeLanguage('vi'); // Vietnamese
i18n.changeLanguage('en'); // English
```

## Translation Key Namespacing

Keys follow a dot-notation hierarchy:

- `nav.*` - Navigation menu items
- `hero.*` - Hero section text
- `about.*` - About section content
- `skills.*` - Skills section
- `projects.*` - Projects section (challenge, solution, metrics, architecture)
- `contact.*` - Contact form, info, inbox
- `resume.*` - Resume modal

## Adding New Translations

1. **English** (`src/i18n/locales/en.json`):
   ```json
   {
     "newSection": {
       "key": "English text"
     }
   }
   ```

2. **Vietnamese** (`src/i18n/locales/vi.json`):
   ```json
   {
     "newSection": {
       "key": "Tiếng Việt text"
     }
   }
   ```

3. **Use in component**:
   ```typescript
   <span>{t('newSection.key')}</span>
   ```

## Current Setup

- **Auto-detection**: Browser language + localStorage fallback
- **Persistence**: Language preference saved in localStorage
- **Supported languages**: English (en), Vietnamese (vi)
- **Fallback**: English if language not found

## Files

- `src/i18n/index.ts` - i18next configuration
- `src/i18n/locales/en.json` - English translations
- `src/i18n/locales/vi.json` - Vietnamese translations

## No Manual Translation Object

❌ **Removed**: The old `TRANSLATIONS` object from `data.ts`

The app now uses i18next hooks exclusively. All components that need translations must use:
```typescript
const { t } = useTranslation();
```

## Interpolation (Dynamic Values)

For translations with variables:

**JSON**:
```json
{ "greeting": "Hello, {{name}}" }
```

**Component**:
```typescript
t('greeting', { name: 'John' })
```

## Nested Keys

All keys are nested by feature for organization:
- ✅ `contact.form.send` - Good
- ❌ `contactFormSend` - Old pattern (removed)

This makes managing hundreds of translations easier.
