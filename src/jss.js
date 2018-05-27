import { create } from 'jss'
import preset from 'jss-preset-default'
import createGenerateClassName from '@material-ui/core/styles/createGenerateClassName'

// Configure JSS
const jss = create(preset())
jss.options.createGenerateClassName = createGenerateClassName

require('jss/lib/utils/moduleId').default = 0
const result = create(preset())
result.id = 0

export default result
