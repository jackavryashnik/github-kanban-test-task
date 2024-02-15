import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Octokit } from 'octokit';

export const ApiRequest = ({ repoOwner, repoName }) => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const octokit = new Octokit({
          baseUrl: 'https://api.github.com',
        });

        const response = await octokit.request(
          'GET /repos/{owner}/{repo}/issues',
          {
            owner: repoOwner,
            repo: repoName,
            headers: {
              Accept: 'application/vnd.github.v3+json',
            },
          }
        );

        setIssues(response.data);
      } catch (error) {
        console.log(error.message);
        setIssues([]);
      }
    };
    fetchData();
  }, [repoOwner, repoName]);

  return (
    <div>
      <h2>Issues:</h2>
      <ul>
        {issues.map(issue => (
          <li key={issue.id}>{issue.title}</li>
        ))}
      </ul>
    </div>
  );
};

ApiRequest.propTypes = {
  repoOwner: PropTypes.string.isRequired,
  repoName: PropTypes.string.isRequired,
};
