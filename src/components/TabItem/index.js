import './index.css'

const TabItem = props => {
  const {TabDetails, ChangeTabId, isActive} = props
  const {buttonText, id} = TabDetails

  const OnClickTabId = () => {
    ChangeTabId(id)
  }

  const ActiveTabBtnClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li>
      <button
        className={`Tab-buttons ${ActiveTabBtnClassName}`}
        type="button"
        onClick={OnClickTabId}
      >
        {buttonText}
      </button>
    </li>
  )
}

export default TabItem
