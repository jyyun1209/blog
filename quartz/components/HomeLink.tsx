import { QuartzComponent, QuartzComponentConstructor } from "./types"

// 블로그(/blog)에서 메인 홈페이지(루트)로 돌아가는 링크
const HomeLink: QuartzComponent = () => {
  return (
    <a class="home-link" href="https://jyyun1209.github.io/" data-router-ignore>
      ← Main Page
    </a>
  )
}

HomeLink.css = `
.home-link {
  display: inline-block;
  font-size: 0.85rem;
  color: var(--gray);
  margin-top: 0.5rem;
}
.home-link:hover {
  color: var(--tertiary);
}
`

export default (() => HomeLink) satisfies QuartzComponentConstructor
