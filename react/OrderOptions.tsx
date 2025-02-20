import React, { FunctionComponent } from 'react'
import { InjectedIntlProps, injectIntl, defineMessages } from 'react-intl'
import { useCssHandles } from 'vtex.css-handles'

import ButtonLink from './ButtonLink'

const messages = defineMessages({
  printReceiptButton: {
    id: 'store/order.header.takeaway.printreceipt.button',
    defaultMessage: '',
  },
  updateButton: { id: 'store/order.header.update.button', defaultMessage: '' },
  myOrdersButton: {
    id: 'store/order.header.myorders.button',
    defaultMessage: '',
  },
  takeAwayCancelButton: {
    id: 'store/order.header.takeaway.cancel.button',
    defaultMessage: '',
  },
  cancelButton: { id: 'store/order.header.cancel.button', defaultMessage: '' },
})

interface Props {
  allowCancellation: boolean
  takeaway?: boolean
  className?: string
  fullWidth?: boolean
  orderId?: string
  myAccountPath?: string
  isApp?: boolean
}

const CSS_HANDLES = [
  'updateOrderButton',
  'myOrdersButton',
  'cancelOrderButton',
] as const

const OrderOptions: FunctionComponent<Props & InjectedIntlProps> = ({
  allowCancellation,
  takeaway,
  intl,
  className = '',
  fullWidth,
  orderId,
  myAccountPath = '/account',
  isApp = false,
}) => {
  const handles = useCssHandles(CSS_HANDLES)

  return (
    <div className={`${className} flex flex-wrap justify-center flex-nowrap-m`}>
      {!isApp ? (
        <div
          className={`${handles.updateOrderButton} mr5-ns mb5-s mb0-m w-100 w-auto-m`}>
          {takeaway ? (
            <ButtonLink variation="secondary" fullWidth={fullWidth} to="">
              {intl.formatMessage(messages.printReceiptButton)}
            </ButtonLink>
          ) : (
            <ButtonLink
              variation="secondary"
              fullWidth={fullWidth}
              to={`${myAccountPath}#/bash-orders/${orderId}`}
            >
              {intl.formatMessage(messages.updateButton)}
            </ButtonLink>
          )}
        </div>
      ) : null}
      {!takeaway && (
        <div
          className={`${handles.myOrdersButton} mr5-ns mb5-s mb0-m w-100 w-auto-m`}
        >
          <ButtonLink
            variation="secondary"
            fullWidth={fullWidth}
            to={`${myAccountPath}#/bash-orders/`}>
            {intl.formatMessage(messages.myOrdersButton)}
          </ButtonLink>
        </div>
      )}
      {allowCancellation && (
        <div className={`${handles.cancelOrderButton} w-100 w-auto-m`}>
          {takeaway ? (
            <ButtonLink variation="danger-tertiary" fullWidth={fullWidth} to="">
              {intl.formatMessage(messages.takeAwayCancelButton)}
            </ButtonLink>
          ) : (
            <ButtonLink
              variation="danger-tertiary"
              fullWidth={fullWidth}
              to={`${myAccountPath}#/bash-orders/${orderId}/cancel`}>
              {intl.formatMessage(messages.cancelButton)}
            </ButtonLink>
          )}
        </div>
      )}
    </div>
  )
}

export default injectIntl(OrderOptions)
