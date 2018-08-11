import React, { Component } from 'react';
// import styles from './Menu.less';

export default class index extends Component {
  render() {
    const { type } = this.props;
    if (type === 'overview') {
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation">
          <g fill="currentColor" fillRule="evenodd">
            <path d="M5 19h14V5H5v14zM3 4.995C3 3.893 3.893 3 4.995 3h14.01C20.107 3 21 3.893 21 4.995v14.01A1.995 1.995 0 0 1 19.005 21H4.995A1.995 1.995 0 0 1 3 19.005V4.995z" fillRule="nonzero" />
            <path d="M9.17 17H4v1.5A1.5 1.5 0 0 0 5.505 20h12.99c.838 0 1.505-.672 1.505-1.5V17h-5.17a3.001 3.001 0 0 1-5.66 0zM7 12h10v2H7zm0-4h10v2H7z" />
          </g>
        </svg>
      );
    }
    if (type === 'repositories') {
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation">
          <g fill="currentColor" fillRule="evenodd">
            <path d="M5 5v14h14V5H5zm0-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" fillRule="nonzero" />
            <path d="M9.232 8.306l-2.93 2.954a1.056 1.056 0 0 0 0 1.478l2.93 2.956a1.034 1.034 0 0 0 1.465 0 1.05 1.05 0 0 0 0-1.478L8.5 11.999l2.197-2.217a1.048 1.048 0 0 0 0-1.476A1.024 1.024 0 0 0 9.965 8c-.267 0-.53.101-.733.306zm4.072-.001a1.05 1.05 0 0 0 0 1.478L15.5 12l-2.196 2.217a1.05 1.05 0 0 0 0 1.477c.404.408 1.06.408 1.464 0l2.93-2.955a1.054 1.054 0 0 0 0-1.478l-2.93-2.956a1.031 1.031 0 0 0-1.464 0z" />
          </g>
        </svg>
      );
    }
    if (type === 'projects') {
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation">
          <path d="M20 19V8h-9.154l-.503-1.258-.455-1.136C9.778 5.33 9.291 5 9.003 5H3.997C4.002 5 4 19 4 19h16zM12.2 6h7.809C21.109 6 22 6.893 22 7.992v11.016c0 1.1-.898 1.992-1.991 1.992H3.991C2.891 21 2 20.107 2 19.008V5.006C2 3.898 2.896 3 3.997 3h5.006c1.103 0 2.327.826 2.742 1.862L12.2 6z" fill="currentColor" />
        </svg>
      );
    }
    if (type === 'issues') {
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation">
          <g fill="currentColor" fillRule="evenodd">
            <path d="M5 12.991c0 .007 14.005.009 14.005.009C18.999 13 19 5.009 19 5.009 19 5.002 4.995 5 4.995 5 5.001 5 5 12.991 5 12.991zM3 5.01C3 3.899 3.893 3 4.995 3h14.01C20.107 3 21 3.902 21 5.009v7.982c0 1.11-.893 2.009-1.995 2.009H4.995A2.004 2.004 0 0 1 3 12.991V5.01zM19 19c-.005 1.105-.9 2-2.006 2H7.006A2.009 2.009 0 0 1 5 19h14zm1-3a2.002 2.002 0 0 1-1.994 2H5.994A2.003 2.003 0 0 1 4 16h16z" fillRule="nonzero" />
            <path d="M10.674 11.331c.36.36.941.36 1.3 0l2.758-2.763a.92.92 0 0 0-1.301-1.298l-2.108 2.11-.755-.754a.92.92 0 0 0-1.3 1.3l1.406 1.405z" />
          </g>
        </svg>
      );
    }
    if (type === 'pullrequests') {
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation">
          <path d="M18 15.2V11c0-1.7-1.3-3-3-3h-1.9l.8-.8c.3-.3.3-.8 0-1.1-.3-.3-.8-.3-1.1 0l-2.3 2.3c-.3.4-.3.9 0 1.2l2.3 2.3c.2.2.3.2.5.2s.4-.1.6-.3c.3-.3.3-.8 0-1.1l-.7-.7H15c.6 0 1 .4 1 1v4.2c-1.2.4-2 1.5-2 2.8 0 1.7 1.3 3 3 3s3-1.3 3-3c0-1.3-.8-2.4-2-2.8zM17 19c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zM7 3C5.4 3 4 4.3 4 6c0 1.3.8 2.4 2 2.8V20c0 .6.4 1 1 1s1-.4 1-1V8.8c1.2-.4 2-1.5 2-2.8 0-1.7-1.3-3-3-3zm0 4c-.5 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" fill="currentColor" fillRule="evenodd" />
        </svg>
      );
    }
    if (type === 'snippets') {
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation">
          <g fill="currentColor" fillRule="evenodd">
            <path d="M16 9c.8 0 1.6-.3 2.1-.9.6-.6.9-1.3.9-2.1s-.3-1.6-.9-2.1c-1.1-1.1-3.1-1.1-4.2 0-.6.5-.9 1.3-.9 2.1s.3 1.5.8 2L12 11.1 10.2 8c.5-.5.8-1.2.8-2s-.3-1.6-.9-2.1C9 2.7 7 2.7 5.9 3.9 5.3 4.4 5 5.2 5 6s.3 1.6.9 2.1c.6.6 1.3.9 2.1.9h.4l6.7 11.5c.2.3.5.5.9.5.2 0 .3 0 .5-.1.5-.3.6-.9.4-1.4l-3.7-6.4 2.4-4.2c.1.1.3.1.4.1zM8.7 6.7c-.4.4-1 .4-1.4 0-.2-.2-.3-.4-.3-.7 0-.3.1-.5.3-.7.2-.2.4-.3.7-.3.3 0 .5.1.7.3.2.2.3.4.3.7 0 .3-.1.5-.3.7zm6.6-1.4c.2-.2.4-.3.7-.3.3 0 .5.1.7.3.2.2.3.4.3.7 0 .3-.1.5-.3.7-.4.4-1 .4-1.4 0-.2-.2-.3-.4-.3-.7 0-.3.1-.5.3-.7z" />
            <path d="M10.3 14.1l-3.1 5.4c-.3.5-.2 1.1.3 1.3.2.1.3.2.5.2.3 0 .7-.2.9-.5l2.6-4.4-1.2-2z" />
          </g>
        </svg>
      );
    }
    if (type === 'settings') {
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation">
          <path d="M11.701 16.7a5.002 5.002 0 1 1 0-10.003 5.002 5.002 0 0 1 0 10.004m8.368-3.117a1.995 1.995 0 0 1-1.346-1.885c0-.876.563-1.613 1.345-1.885a.48.48 0 0 0 .315-.574 8.947 8.947 0 0 0-.836-1.993.477.477 0 0 0-.598-.195 2.04 2.04 0 0 1-1.29.08 1.988 1.988 0 0 1-1.404-1.395 2.04 2.04 0 0 1 .076-1.297.478.478 0 0 0-.196-.597 8.98 8.98 0 0 0-1.975-.826.479.479 0 0 0-.574.314 1.995 1.995 0 0 1-1.885 1.346 1.994 1.994 0 0 1-1.884-1.345.482.482 0 0 0-.575-.315c-.708.2-1.379.485-2.004.842a.47.47 0 0 0-.198.582A2.002 2.002 0 0 1 4.445 7.06a.478.478 0 0 0-.595.196 8.946 8.946 0 0 0-.833 1.994.48.48 0 0 0 .308.572 1.995 1.995 0 0 1 1.323 1.877c0 .867-.552 1.599-1.324 1.877a.479.479 0 0 0-.308.57 8.99 8.99 0 0 0 .723 1.79.477.477 0 0 0 .624.194c.595-.273 1.343-.264 2.104.238.117.077.225.185.302.3.527.8.512 1.58.198 2.188a.473.473 0 0 0 .168.628 8.946 8.946 0 0 0 2.11.897.474.474 0 0 0 .57-.313 1.995 1.995 0 0 1 1.886-1.353c.878 0 1.618.567 1.887 1.353a.475.475 0 0 0 .57.313 8.964 8.964 0 0 0 2.084-.883.473.473 0 0 0 .167-.631c-.318-.608-.337-1.393.191-2.195.077-.116.185-.225.302-.302.772-.511 1.527-.513 2.125-.23a.477.477 0 0 0 .628-.19 8.925 8.925 0 0 0 .728-1.793.478.478 0 0 0-.314-.573" fill="currentColor" fillRule="evenodd" />
        </svg>
      );
    }
    return <span />;
  }
}