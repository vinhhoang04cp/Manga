# Design System Documentation

## Overview
Hệ thống thiết kế đã được chuẩn hóa cho dự án Manga với các thành phần và quy tắc thiết kế nhất quán.

## Cấu trúc Files

### Core Files
- `variables.css` - Chứa tất cả CSS variables (màu sắc, font, spacing, etc.)
- `utilities.css` - Utility classes cho layout, spacing, typography
- `components.css` - Common component styles có thể tái sử dụng

### Component Files  
- `components/common/Header.css` - Header component styles
- `components/Home/*.css` - Home page component styles

## CSS Variables

### Colors
```css
--primary-bg: #2c3e50        /* Background chính */
--primary-blue: #1E90FF      /* Màu xanh chính */
--primary-red: #ff4757       /* Màu đỏ accent */
--text-primary: #ffffff      /* Text màu trắng */
--text-secondary: #ecf0f1    /* Text màu xám nhạt */
--text-muted: #bdc3c7        /* Text màu xám */
```

### Typography
```css
--font-xs: 0.75rem     /* 12px */
--font-sm: 0.875rem    /* 14px */  
--font-base: 1rem      /* 16px */
--font-lg: 1.125rem    /* 18px */
--font-xl: 1.25rem     /* 20px */
--font-2xl: 1.5rem     /* 24px */
--font-3xl: 1.875rem   /* 30px */
--font-4xl: 2.25rem    /* 36px */
--font-5xl: 2.5rem     /* 40px */
```

### Spacing
```css
--space-1: 0.25rem    /* 4px */
--space-2: 0.5rem     /* 8px */
--space-3: 0.75rem    /* 12px */
--space-4: 1rem       /* 16px */
--space-5: 1.25rem    /* 20px */
--space-6: 1.5rem     /* 24px */
--space-8: 2rem       /* 32px */
--space-10: 2.5rem    /* 40px */
--space-12: 3rem      /* 48px */
--space-16: 4rem      /* 64px */
--space-20: 5rem      /* 80px */
```

## Utility Classes

### Layout
```css
.container           /* Container với max-width responsive */
.container-fluid     /* Container full width */
.row                 /* Flex row container */
.col, .col-6, etc.   /* Grid columns */
```

### Flexbox
```css
.d-flex              /* display: flex */
.justify-center      /* justify-content: center */
.align-center        /* align-items: center */
.flex-column         /* flex-direction: column */
```

### Spacing
```css
.m-4                 /* margin: 1rem */
.mt-4                /* margin-top: 1rem */
.p-4                 /* padding: 1rem */
.pt-4                /* padding-top: 1rem */
```

### Typography
```css
.text-center         /* text-align: center */
.text-primary        /* color: var(--text-primary) */
.font-bold           /* font-weight: 700 */
.font-2xl            /* font-size: 1.5rem */
```

## Component Classes

### Buttons
```css
.btn                 /* Base button */
.btn-primary         /* Primary button */
.btn-secondary       /* Secondary button */
.btn-outline         /* Outline button */
.btn-sm, .btn-lg     /* Button sizes */
```

### Cards
```css
.card                /* Base card */
.card-header         /* Card header */
.card-body           /* Card body */
.card-footer         /* Card footer */
```

### Forms
```css
.form-input          /* Form input styling */
.form-label          /* Form label styling */
```

### Badges
```css
.badge               /* Base badge */
.badge-primary       /* Primary badge */
.badge-success       /* Success badge */
```

## Responsive Breakpoints

```css
--breakpoint-sm: 640px
--breakpoint-md: 768px  
--breakpoint-lg: 1024px
--breakpoint-xl: 1280px
--breakpoint-2xl: 1536px
```

## Usage Examples

### Basic Layout
```html
<div class="container">
  <div class="row">
    <div class="col-6">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Title</h3>
        </div>
        <div class="card-body">
          Content here
        </div>
      </div>
    </div>
  </div>
</div>
```

### Button Examples
```html
<button class="btn btn-primary">Primary Button</button>
<button class="btn btn-secondary btn-sm">Small Secondary</button>
<button class="btn btn-outline btn-lg">Large Outline</button>
```

### Typography
```html
<h1 class="font-4xl font-bold text-primary">Large Heading</h1>
<p class="font-base text-secondary">Body text</p>
<span class="font-sm text-muted">Small muted text</span>
```

## Best Practices

1. **Sử dụng CSS Variables**: Luôn sử dụng variables thay vì hard-code values
2. **Utility-First**: Ưu tiên utility classes trước khi tạo custom CSS
3. **Component Reuse**: Sử dụng component classes cho các pattern phổ biến
4. **Responsive Design**: Sử dụng mobile-first approach
5. **Consistency**: Giữ nhất quán spacing, colors, typography trong toàn dự án

## Migration Guide

Để migrate component cũ sang design system mới:

1. Thay thế hard-coded colors bằng CSS variables
2. Sử dụng spacing variables thay vì pixel values
3. Apply utility classes cho layout và spacing
4. Sử dụng component classes cho patterns phổ biến
5. Test responsive behavior với breakpoints mới

## Component Checklist

- [ ] Colors sử dụng CSS variables
- [ ] Spacing sử dụng spacing scale
- [ ] Typography sử dụng font scale  
- [ ] Responsive design tested
- [ ] Hover/focus states implemented
- [ ] Accessibility considerations
- [ ] Performance optimized