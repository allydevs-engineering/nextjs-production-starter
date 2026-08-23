import '@testing-library/jest-dom/vitest';
import { vi } from 'vitest';

// Mock the Next.js Navigation API for App Router components
vi.mock('next/navigation', () => ({
  useRouter() {
    return {
      prefetch: () => null,
      push: () => null,
      replace: () => null,
      back: () => null,
    };
  },
  usePathname() {
    return '';
  },
  useSearchParams() {
    return new URLSearchParams();
  },
}));
