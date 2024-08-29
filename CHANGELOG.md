# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.9.9] - 2024-08-29

## [1.9.8] - 2024-08-29

## [1.9.7] - 2024-08-29
## [1.9.6] - 2022-07-15
### Fixed
- Change `tfg` to `bash` on order links
## [1.9.5] - 2022-07-15
### Changed
- Order Confirmation - Hide the information of document
## [1.9.4] - 2022-06-29
### Changed
- `OzowEFT` text payment method changed to `Instant EFT`

## [1.9.3] - 2022-06-17
### Changed
- 'OsowEFT' text payment method changed to 'OzowEFT'

## [1.9.2] - 2022-05-31

### Added
- updated text at order confirmation page
## [1.9.1] - 2022-05-28

### Added
- update link of tfg-order of my account of the order-confirmation page

## [1.9.0] - 2022-03-29

### Added

- Husky conventional commit
- use `customerEmail` prop comming from `order-placed` app
- Added classes to multiple elements from `PaymentMethod` to make its accesibles

## [1.8.0] - 2022-01-31

### Added

- `myAccountPath` prop to `OrderDetails` component.

## [1.7.0] - 2021-10-29

### Added
- I18n Ar, Hu.

### Changed
- I18n It, Ja, Ko, Ro.

## [1.6.0] - 2021-08-11
### Added
- CSS Handle `pickupFriendlyName`.
## [1.5.0] - 2021-04-26

### Added

- I18n Da, It, Jp, Kr, Ro and Sv.
- Crowdin configuration file.

## [1.4.0] - 2021-04-14

### Added
- Translation for gift card.

## [1.3.0] - 2021-03-25
### Added
- CSS Handles `updateOrderButton`, `myOrdersButton`, and `cancelOrderButton` on `OrderOptions`.

## [1.2.0] - 2021-03-10

## Added

- Added CSS Handles `paymentGroup` & `paymentValue` on PaymentMethod
- Added CSS Handle `addressContainer` on Address

## [1.1.1] - 2020-11-16
### Fixed
- Redirect to login when trying to print bank invoice while not logged-in.

## [1.1.0] - 2020-05-11

### Added

- CSS Handles for CustomerInfo component

## [1.0.2] - 2019-12-10

### Changed

- Repo configs based on [React-app Template](https://github.com/vtex-apps/react-app-template/)

## [1.0.1] - 2019-11-13

## [1.0.0] - 2019-02-27

### Changed

- Props expected by ProductImage component
- Props expected by OrderHeader component
- Delete legacy components from MyOrders
- Props expected by ButtonLink component

### Fixed

- CustomerInfo component did not take into account `document` not being present in every country
- Typings for `render-runtime`
- Layout adjustments

### Added

- Components to be exported
- README first draft

## [0.1.0] - 2019-02-21

### Added

- Components from OrderPlaced
- Configuration for TypeScript

### Changed

- Builder version for Messages

## [0.0.1-beta] - 2019-01-21

### Added

- Initialize repo.
