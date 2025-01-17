import classNames from "classnames";
import { get } from "lodash";
import React from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";

/** Components **/
import Block from "components/Block";

import styles from "./Features.scss";

const MainFeatures = ({ features }) => (
  <FormattedMessage id="features.title" defaultMessage="Key features of Ties.DB">
    {title => (
      <Block className={styles.Root} id="features" title={title}>
        <div className={styles.Features}>
          {features.map(({ icon, id }, index) => (
            <div className={styles.Feature} key={index}>
              <img alt={title} className={styles.FeatureIcon} src={icon} />

              <div className={styles.FeatureContainer}>
                <div className={styles.FeatureTitle}>
                  <FormattedMessage id={`features.${id}.title`} defaultMessage="Title" />
                </div>

                <div className={styles.FeatureDescription}>
                  <FormattedMessage
                    id={`features.${id}.description`}
                    defaultMessage="Description"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.More}>
          <FormattedMessage id="files.white_paper" defaultMessage="/files/white-paper-ru.pdf">
            {link => (
              <a className={styles.MoreLink} href={link}>
                <FormattedMessage id="features.more" defaultMessage="See all features" />
              </a>
            )}
          </FormattedMessage>
        </div>

        <div className={styles.Actions}>
          <FormattedMessage id="files.yellow_paper" defaultMessage="/files/yellow-paper-ru.pdf">
            {link => (
              <a className={styles.Action} href={link}>
                <FormattedMessage id="common.yellowpaper" defaultMessage="Yellow paper" />
              </a>
            )}
          </FormattedMessage>

          <FormattedMessage id="files.short_guide" defaultMessage="/files/short-guide-ru.pdf">
            {link => (
              <a className={classNames(styles.Action, styles.ActionRed)} href={link}>
                <FormattedMessage id="common.guide" defaultMessage="Short guide" />
              </a>
            )}
          </FormattedMessage>

          <FormattedMessage id="files.white_paper" defaultMessage="/files/white-paper-ru.pdf">
            {link => (
              <a className={styles.Action} href={link}>
                <FormattedMessage id="common.whitepaper" defaultMessage="White paper" />
              </a>
            )}
          </FormattedMessage>
        </div>
      </Block>
    )}
  </FormattedMessage>
);

const mapStateToProps = ({ views }) => ({
  features: get(views, "main.features", [])
});

export default connect(mapStateToProps)(MainFeatures);
