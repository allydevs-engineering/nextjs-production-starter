import { Container } from '@/components/layout/container';
import { siteConfig } from '@/config/site';

export default function Home() {
  return (
    <main className="flex min-h-screen items-center">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-medium tracking-widest text-neutral-500 uppercase">
            Engineering baseline
          </p>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl">
            {siteConfig.name}
          </h1>

          <p className="mt-6 text-lg leading-8 text-neutral-600">{siteConfig.description}</p>
        </div>
      </Container>
    </main>
  );
}
