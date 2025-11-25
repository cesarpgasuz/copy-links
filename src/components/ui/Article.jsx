

const Article = ({children, clase}) => {
  return (
    <article className={`border border-slate-200 rounded py-4 px-5 ${clase}`}>
        {children}
    </article>
  )
}
export default Article