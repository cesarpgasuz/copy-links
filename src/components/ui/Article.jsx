

const Article = ({children}) => {
  return (
    <article className={`border border-slate-200 rounded py-4 px-5`}>
        {children}
    </article>
  )
}
export default Article