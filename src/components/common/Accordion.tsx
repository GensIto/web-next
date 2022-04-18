/**
 * Accordion
 * @link https://qiita.com/berry99/items/6129bb52b8f1f382381d
 * @link https://qiita.com/Sotq_17/items/58d7c6c8ae657c18996b
 */

import React, {useState, ReactNode, ReactElement} from "react";

type Props = {
  children?: ReactNode,
  wrapperClassNameStr?: string,
}

let childrenArray: ReactElement[] = [];

const Accordion = ({
  wrapperClassNameStr = '',
  ...props
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const wrapperClassName = isOpen ? `${wrapperClassNameStr} is-open` : `${wrapperClassNameStr}`;

  if (!props.children) {
    return (<>{props.children}</>);
  } else {
    // React.Children.toArray(props.children);
    React.Children.forEach(props.children, child => {
      if (React.isValidElement(child)) {
        childrenArray.push(child);
      }
    })
    if (childrenArray.length) {
      return (
        <>
          {childrenArray.map((child, index) => {
            child.props.name === 'AccordionSummary' ? (
              <div key={index} onClick={toggle}>
                {child}
                {/* {wrapperClassName} */}
              </div>
            ) : child.props.name === 'AccordionDetails' ? (
              <div key={index}>
                {child}
              </div>
            ) : null
          })}
        </>
      );{/* return ( */}
    } else {
      return (<>{props.children}</>);
    }
  }
};

const AccordionSummary = ({children}: {children: ReactNode}) => {
  return (
    <>
      {children}
    </>
  );
};

const AccordionDetails = ({children}: {children: ReactNode}) => {
  return (
    <>
      {children}
    </>
  );
};

AccordionSummary.defaultProps = {
  name: 'AccordionSummary'
}

AccordionDetails.defaultProps = {
  name: 'AccordionDetails'
}

export {Accordion, AccordionSummary, AccordionDetails};
