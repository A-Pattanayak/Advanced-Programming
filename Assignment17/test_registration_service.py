import pytest

from registration_service import (
    RegistrationService,
    InvalidEmailError,
    UnderageError
)


@pytest.fixture
def service():
    return RegistrationService()


def test_successful_registration(service):

    result = service.register_user(
        "aniketexample.com",
        21
    )

    assert result is True


def test_invalid_email(service):

    with pytest.raises(InvalidEmailError):
        service.register_user(
            "wrong-email",
            21
        )


def test_underage_user(service):

    with pytest.raises(UnderageError):
        service.register_user(
            "aniket@example.com",
            16
        )
