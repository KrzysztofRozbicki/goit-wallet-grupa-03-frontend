import dropDownArrow from '../../assets/icons/dropDown.svg';

export const selectStyles = {
    control: (styles) => ({ 
      ...styles, 
      backgroundColor: "transparent",
      border: "1px solid black",
      borderRadius: '30px',
      padding: '13px 20px',
      whiteSpace: 'nowrap',
      color: '#000',
      '&:hover': {
        cursor: 'pointer'
      }
    }),
    menu: provided => ({
      ...provided,
      width: '100%',
      margin: '0',
      backgroundColor: 'rgba(255, 255, 255, 0.7)',
      backdropFilter: 'blur(5px)',
      filter: 'dropShadow(0 6px 1rem rgba(0,0,0,.1))',
      borderRadius: '20px',
      zIndex: 2,
      scrollbarWidth: 'none',
      '&::-webkit-scrollbar': {
        display: 'none',
      },
    }),
    menuList: base => ({
      ...base,
      border: 'none',
      borderRadius: '20px',
      outline: 'none',
      width: '100%',
      maxHeight: '156px',
      scrollbarWidth: 'none',
      '::-webkit-scrollbar': {
        display: 'none'
      },
    }),
    container: provided => ({
      ...provided,
      width: '100%',
      fontFamily: 'Circe',
      fontSize: '1rem',
      fontWeight: '400',
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
    indicatorContainer: () => ({
      color: '#000',
    }),
    dropdownIndicator: provided => ({
      ...provided,
      backgroundImage: `url(${dropDownArrow})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      width: '20px',
      height: '20px',
    }),
    option: (base, { isSelected, isFocused }) => ({
      ...base,
      '&:hover': {
        backgroundColor: '#fff',
        opacity: 1,
        cursor: 'pointer',
      },
      '&:active': {
        backgroundColor: '#fff',
        opacity: 1
      },
      backgroundColor: isSelected || isFocused ? '#fff' : 'transparent',
      color: isSelected || isFocused ? '#000' : null,
    }),
  }