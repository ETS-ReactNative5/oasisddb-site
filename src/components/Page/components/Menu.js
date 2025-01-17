import classNames from 'classnames';
import React, { createElement } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { compose, withStateHandlers } from 'recompose';

import styles from './Menu.scss';

const COLOR = {
  DARK: 'Dark',
};

const VARIANT = {
  DESKTOP: 'Desktop',
  DESKTOP_FOOTER: 'DesktopFooter',
  MOBILE: 'Mobile',
  MOBILE_FOOTER: 'MobileFooter',
};

const PageMenu = ({
  color,
  currentId,
  handleItemClick,
  menu,
  opened,
  variant,
}) => {
  const className = classNames(styles.Root, {
    [styles.RootOpened]: !!opened,

    [styles.RootVariantDesktop]: variant === VARIANT.DESKTOP,
    [styles.RootVariantDesktopDark]: color === COLOR.DARK,
    [styles.RootVariantDesktopFooter]: variant === VARIANT.DESKTOP_FOOTER,

    [styles.RootVariantMobile]: variant === VARIANT.MOBILE || variant === VARIANT.MOBILE_FOOTER,
    [styles.RootVariantMobileFooter]: variant === VARIANT.MOBILE_FOOTER,
  });

  return (
    <div className={className}>
      {menu.map(({ anchor, external, id, items, link }, index) => {
        const className = classNames(styles.Item, {
          [styles.ItemActive]: currentId === id || variant === VARIANT.DESKTOP_FOOTER,
        });

        const titleClassName = classNames(styles.ItemTitle, {
          [styles.ItemTitleWithCaret]: !!items,
          [styles.ItemTitleWithLink]: !!link,
        });

        return (
          <div
            className={className}
            key={index}
            onClick={() => items && handleItemClick(id)}
          >
            <FormattedMessage
              id={`menu.${id}`}
              defaultMessage="Link"
            >
              {(title) => (
                <FormattedMessage
                  id={link || 'empty'}
                  defaultMessage={link}
                >
                  {(link) => (
                    createElement((link && link !== '_') ? anchor || external ? 'a' : Link : 'div', {
                      children: title,
                      className: titleClassName,
                      href: link,
                      to: link,
                    })
                  )}
                </FormattedMessage>
              )}
            </FormattedMessage>

            {items && (
              <div className={styles.ItemSubmenu}>
                {items.map(({ id, anchor, external, link }, index) => (
                  <FormattedMessage
                    id={`menu.${id}`}
                    defaultMessage="Link"
                  >
                    {(title) => (
                      <FormattedMessage
                        id={link || 'empty'}
                        defaultMessage={link}
                      >
                        {(link) => (
                          createElement(anchor || external ? 'a' : Link, {
                            children: title,
                            className: styles.ItemLink,
                            key: index,
                            href: link,
                            to: link,
                          })
                        )}
                      </FormattedMessage>
                    )}
                  </FormattedMessage>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}



export default compose(
  withStateHandlers(
    props => ({ currentId: null }),
    {
      handleItemClick: state => id => ({ currentId: id === state.currentId ? null : id }),
    }
  )
)(PageMenu);
export { VARIANT };
