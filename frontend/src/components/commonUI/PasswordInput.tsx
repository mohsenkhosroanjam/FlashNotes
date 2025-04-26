import { Input, IconButton } from '@chakra-ui/react'
import { forwardRef } from 'react'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'

interface PasswordInputProps {
  placeholder: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  name?: string
  ref?: React.Ref<HTMLInputElement>
}

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>((props, ref) => {
  const { t } = useTranslation()
  const [showPassword, setShowPassword] = useState(false)

  const inputType = showPassword ? 'text' : 'password'
  const ariaLabel = showPassword ? t('general.actions.hidePassword') : t('general.actions.showPassword')

  const handleTogglePassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <Input
        ref={ref}
        type={inputType}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        name={props.name}
        borderRadius="sm"
        color="fg.DEFAULT"
        bg="bg.input"
        width="100%"
        paddingRight="2.5rem"
        css={{
          '&:focus': {
            outline: 'none',
            borderColor: 'bg.50',
            bg: 'bg.100',
          },
          '&::selection': {
            backgroundColor: 'bg.50',
            color: 'accent.blue',
          },
        }}
      />
      <div style={{ position: 'absolute', right: '0.5rem', top: '50%', transform: 'translateY(-50%)' }}>
        <IconButton
          variant="ghost"
          aria-label={ariaLabel}
          onClick={handleTogglePassword}
          size="sm"
        >
          {showPassword ? <FiEyeOff /> : <FiEye />}
        </IconButton>
      </div>
    </div>
  )
})

export default PasswordInput 