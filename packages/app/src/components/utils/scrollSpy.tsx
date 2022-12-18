import { Block, Button, Content, Flex, Paragraph } from '@cube-dev/ui-kit';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import { RiArrowUpCircleLine } from 'react-icons/ri';

export function ScrollSpy(): JSX.Element {
  const router = useRouter();
  const [headings, setHeadings] = useState<string[]>();
  const [active, setActive] = useState<string>('');

  useLayoutEffect(() => {
    const headings: Element[] = Array.from(document.getElementsByTagName('h2'));

    const table = headings
      .map((heading) => {
        return heading.id.split('-').join(' ');
      })
      .filter((i) => i.length > 0);
    setHeadings(table);
  }, [router.asPath]);

  const backToTop = useCallback(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!headings) {
      return;
    }

    // TODO improve once wrapped heading sections are applied
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio === 1) {
            const id = entry.target.getAttribute('id');
            setActive(id!);
            break;
          }
        }
      },
      {
        threshold: 1,
      }
    );

    headings.forEach((id) => {
      let el;
      try {
        el = document.getElementById(id);
      } catch (e) {
        console.error(`heading ${id} cannot be found`);
      }
      if (el) observer.observe(el);
    });

    return () => {
      setActive('');
      observer.disconnect();
    };
  }, [headings]);

  if (!headings) {
    return <ul />;
  }

  function onClick(id: string) {
    const el = document.getElementById(id);
    const sectionTop = el?.getBoundingClientRect().top;
    const currentTop = document.documentElement.scrollTop;
    window.scrollTo({ top: sectionTop! + currentTop - 100, behavior: 'smooth' });
    /* eslint-disable  */
    if (history.pushState) {
      history.pushState(null, '', `#${id}`);
    } else {
      location.hash = `#${id}`;
    }
    setActive(id!);
  }

  return (
    <Block
      style={{
        position: 'sticky',
        marginTop: '50px',
        width: '210px',
        top: '50px',
        borderLeft: '1px solid #352D3B',
        paddingLeft: '26px',
        color: '#ffffff',
        height: 'max-content',
      }}
    >
      <div style={{ fontWeight: '600', fontSize: '14px', lineHeight: '20px' }}>Contents</div>

      <Flex flow="column" margin="16px 0 0 0" gap="16px">
        {headings.map((elem) => (
          <Paragraph key={elem} style={{ fontSize: '14px', fontWeight: '400' }}>
            <a
              style={{ color: elem === active ? '#7F7AFF' : '#ffffff' }}
              href={`#${elem.split(' ').join('-')}`}
            >
              {elem.length < 24 ? elem : elem.slice(0, 24) + '...'}
            </a>
          </Paragraph>
        ))}
      </Flex>

      {/* back to top button  */}

      <Button
        type="link"
        styles={{
          display: 'block',
          width: '100%',
          border: {
            '': 'none',
            hovered: 'none',
          },
          outline: {
            '': 'none',
            hovered: 'none',
          },
        }}
        onPress={backToTop}
      >
        <Flex
          alignItems="center"
          gap="12.5px"
          margin="16px 0 0 0"
          padding="12px 0"
          style={{ borderTop: '1px solid #352D3B' }}
        >
          <RiArrowUpCircleLine color="#ffffff" size="20px" />
          <Paragraph style={{ fontSize: '14px', fontWeight: '400', color: '#ffffff' }}>
            Back to top
          </Paragraph>
        </Flex>
      </Button>
    </Block>
  );
}
