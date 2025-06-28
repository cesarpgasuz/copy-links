const ArticleBody = ({children, estilos = 'bg-slate-100'}) => {
  return (
    <div className={`${estilos} relative px-4 py-4 rounded`}>{children}</div>
  )
}
export default ArticleBody